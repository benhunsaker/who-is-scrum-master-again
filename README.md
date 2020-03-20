# who-is-scrum-master-again

This is a slack integration help keep track who is the scrum master on a team with a rotating scrum master.
Once installed you can use the following commands:

*/whosm create **team name*** - Creates a new team to iterate through
*/whosm add **team name** **@slack_handle*** - Add person to the bottom of the list
*/whosm remove **team name** **@slack_handle*** - Removes person from the list, if the person is the current scrum master then the next person on the list becomes the scrum master
*/whosm set-sprint-start **day of the week sprints start*** - Sets what day of the week the rotation happens
*/whosm set-sprint-length **number of days*** - sets how often the the pointer moves to the next person on the list
*/whosm set-sprint **number of days a sprint lasts** **date of the week sprints starts** **time of day** **timezone***
*/whosm **team name*** - Returns the current scrum master
