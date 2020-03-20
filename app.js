require('dotenv').config();

// Require the Bolt package (github.com/slackapi/bolt)
const { App, LogLevel } = require("@slack/bolt");

const { createTeam, getCurrentSM } = require('./src/createTeam');
const { addPersonToTeam, removePersonFromTeam } = require('./src/people');

const teams = {};
const commandOptions = {
  create: createTeam,
  add: addPersonToTeam,
  remove: removePersonFromTeam
};
const commands = Object.keys(commandOptions);


const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel: LogLevel.DEBUG,
});

app.command('/whoism', async({command, ack, say}) => {
  ack();

  const args = command.text.split(' ');
  (commandOptions[args[0]] || getCurrentSM)(teams, args).then(say);
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running on localhost:3000!');
})();
