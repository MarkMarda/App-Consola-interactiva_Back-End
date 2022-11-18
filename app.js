require("colors");

const { showMenu, pause } = require("./helpers/messages");


console.clear();

const main = async() => {

  console.log("Hellow World");

  let option = "";

  do {

    option = await showMenu();
    console.log({option});

    if(option !== "0") await pause();

  } while(option !== "0")

  //pause(); 

};

main();
