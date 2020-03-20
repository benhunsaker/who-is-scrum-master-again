const addPersonToTeam = async (teams, args) => {
  if (!args[1]) return `Please specify a user's slack handle to be added`;
  userHandle = args[1];

  if (!args[2]) return `Please specify a team for the ${userHandle} to be added`;
  teamName = args[2];
  teamKey = teamName.toLowerCase();

  if (!teams[teamKey]) return `Team ${teamName} does not exist, please create the team first using \`/whoism create ${teamName}\``;

  people = teams[teamKey].people;
  if (people.includes(userHandle)) return `${userHandle} is already part of the team.`;

  people.push(userHandle);

  return `Team ${teamName} now includes: \n ${people.join('\n')}`;
}

const removePersonFromTeam = async (teams, args) => {
  // remove user from team
  if (!args[1]) return `Please specify a user's slack handle to be removed`;
  userHandle = args[1];

  if (!args[2]) return `Please specify a team for the ${userHandle} to be added`;
  teamName = args[2];
  teamKey = teamName.toLowerCase();

  if (!teams[teamKey]) return `Team ${teamName} does not exist, please create the team first using \`/whoism create ${teamName}\``;

  people = teams[teamKey].people;
  const personIndex = people.indexOf(userHandle);
  if (personIndex < 0) return `${userHandle} is not part of the ${teamName} team`;

  people.splice(personIndex, 1);
  return `${userHandle} has been removed from __${teamName}__.\nTeam __${teamName}__ now includes: \n ${people.join('\n')}`;
}


module.export = { addPersonToTeam, removePersonFromTeam };
