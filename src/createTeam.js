const createTeam = async (teams, args) => {
  if (!args[1]) return `Please specify a team name`;

  const teamName = args[1];
  const teamKey = teamName.toLowerCase();

  if (teams[teamKey]) return `Team '${teamName}' already exists. Please specify a new team name, team name are NOT case sensitive`;

  team = {
    name: teamName,
    indexOfCurrentSM: 0,
    settings: {
      length: 7,
      day: 'Wednesday',
      time: '9am',
      timezone: 'central'
    },
    people: []
  };
  teams[teamKey] = team;

  return `Created team *${teamName}* with ${team.settings.length} day sprints begining every ${team.settings.day} at ${team.settings.time} ${team.settings.timezone}.\n Be sure to added users to the team by \`/whoism add @so-n-so ${teamName}\``;
};

const getCurrentSM = async (teams, args) => {
  if (!args[0]) return `Please specify a team to find out who the scrum master is or any other action like create, add, or remove.`;

  teamName = args[0];
  teamKey = teamName.toLowerCase();

  if (!teams[teamKey]) return `Team ${teamName} does not exist.`;
  team = teams[teamKey];

  if (team.people.length === 0) return `__${teamName}__ does not have anybody in it. Please add someone by \`/whoism add @so-n-no ${teamName}\``;

  return `${team.people[team.indexOfCurrentSM]} is the current scrum master of team __${teamName}__`;
};


module.exports = { createTeam, getCurrentSM };
