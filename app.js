import colors from "colors";

import { inquirerMenu } from "./helpers/inquirer.js";

import { pause } from "./helpers/inquirer.js"



console.clear();

const main = async() => {

  console.log("Hellow World");

  let option = "";

  do {

    option = await inquirerMenu();
    console.log({option});

    await pause();

  } while(option !== "0") 

  //pause(); 

}

main();

