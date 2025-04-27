const colors=require('colors');
const readline=require('readline-sync');

console.log('--- Task Logger ---'.rainbow);


const task = readline.question('Enter task description: ');
const status = readline.question('Enter task status (completed/pending/error): ').toLowerCase();


console.log('\n--- Task Summary ---');

switch (status) {
  case 'completed':
    console.log(`Task: ${task}`.green);
    console.log('Status: Completed'.bold.green);
    break;
  case 'pending':
    console.log(`Task: ${task}`.yellow);
    console.log('Status: Pending'.bold.yellow);
    break;
  case 'error':
    console.log(`Task: ${task}`.red);
    console.log('Status: Error'.bold.red);
    break;
  default:
    console.log(`Task: ${task}`.white);
    console.log('Status: Unknown'.gray);
}