require("colors");



const showMenu = () => {

  console.log("==========================".cyan);
  console.log("      Select a option     ".cyan);
  console.log("==========================\n".cyan);

  console.log(`${"1.".cyan} Create Task`);
  console.log(`${"2.".cyan} All Tasks`);
  console.log(`${"3.".cyan} Completed Tasks`);
  console.log(`${"4.".cyan} Not Completed Tasks`);
  console.log(`${"5.".cyan} Do Task(s)`);
  console.log(`${"6.".cyan} Delete Tasks`);
  console.log(`${"0.".cyan} Escape\n`);

  const readline = require("readline").createInterface({

    input: process.stdin,
    output: process.stdout

  });

  readline.question("Select a option:", (opt) => {

    readline.close();

  });

};

const pause = () => {

  const readline = require("readline").createInterface({

    input: process.stdin,
    output: process.stdout

  });

  readline.question(`\nPress ${"ENTER".cyan} to continue\n`, () => {

    readline.close();

  });

};


module.exports = {
  
  showMenu,
  pause

};