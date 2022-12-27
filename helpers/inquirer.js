import inquirer from "inquirer"

import colors from "colors";



const questions = [

  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: "1",
        name: "1. Create Task"
      },
      {
        value: "2",
        name: "2. All Tasks"
      }, 
      {
        value: "3",
        name: "3. Completed Tasks"
      },
      {
        value: "4",
        name: "4. Not Completed Tasks"
      },
      {
        value: "5",
        name: "5. Do Task(s)"
      },
      {
        value: "6",
        name: "6. Delete Task"
      },
      {
        value: "0",
        name: "0. Exit"
      }
    ]
  }
  
];

const inquirerMenu = async() => {

  //console.clear();
  console.log("==========================".cyan);
  console.log("      Select a option     ".cyan);
  console.log("==========================\n".cyan);

  const { option } = await inquirer.prompt(questions);

  return option;
  
}

const pause = async() => {

  const question = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"Enter".cyan} to continue`
    }
  ];

  console.log("\n");

  const pause = await inquirer
    .prompt(question)
    .then((answers) => {
      console.log(JSON.stringify(answers, null, " "));
    });

  return pause;

}


export { inquirerMenu, pause }

