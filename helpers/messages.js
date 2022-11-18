require("colors");



const showMenu = () => {

  return new Promise(resolve => {

    console.clear();
    console.log("==========================".cyan);
    console.log("      Select a option     ".cyan);
    console.log("==========================\n".cyan);

    console.log(`${"1.".cyan} Create Task`);
    console.log(`${"2.".cyan} All Tasks`);
    console.log(`${"3.".cyan} Completed Tasks`);
    console.log(`${"4.".cyan} Not Completed Tasks`);
    console.log(`${"5.".cyan} Do Task(s)`);
    console.log(`${"6.".cyan} Delete Tasks`);
    console.log(`${"0.".cyan} Exit\n`);

    const readline = require("readline").createInterface({

      input: process.stdin,
      output: process.stdout

    });

    readline.question("Select a option: ", (option) => {

      readline.close();
      resolve(option);

    });

  });

};

const pause = () => {

  return new Promise(resolve => {

    const readline = require("readline").createInterface({

      input: process.stdin,
      output: process.stdout
  
    });
  
    readline.question(`\nPress ${"ENTER".cyan} to continue\n`, (option) => {
  
      readline.close();
      resolve();
  
    });
  
  });

};


module.exports = {
  
  showMenu,
  pause

};