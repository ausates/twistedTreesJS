const input = require('readline-sync');

function getStats(character){
  console.log(`${character.name} has the following stats:\nhp: ${character.hp}\nattack: ${character.atk}\nstrength: ${character.str}\nrange: ${character.rng}\nmagic: ${character.mgk}`);
}

function buildChar(obj){
  let userChar = {};
  let keys = Object.keys(obj);
  for (i = 0; i < keys.length; i++){
    key = keys[i];
    userChar[key] = obj[key];
  }
  return userChar;
}

function capitalize(name){
  let spaceInName;
  if (name.indexOf(' ') >= 0) {
    spaceInName = true;
  }
  if (spaceInName) {
    let words = name.split(" ");
    let firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    let lastName = words[1].charAt(0).toUpperCase() + words[1].slice(1).toLowerCase();
    name = firstName + " " + lastName;
  } else {
    name = (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
  }
  return name;
}

function getName(){
  let playerName = "";
  let correctName = false;
  while (correctName === false){
  playerName = input.question("what is your name: ");
  playerName = capitalize(playerName);
  correctName = input.question(`Your name is ${playerName}, is that correct (yes/no): `);
  if (correctName.toLowerCase() === 'yes'){
    correctName = true;
  } else {
    correctName = false;
  }
  }
  return playerName;
  }

function getRace(){
  let race = "";
  let raceOptions = ["elf", "human", "dwarf"];
  let raceOptionsCapitalized = ["Elf", "Human", "Dwarf"];
  let correctRace = false;
  console.log(`There are ${raceOptions.length} races in Twisted Trees: ${raceOptionsCapitalized}.`)

  while (correctRace !== true){
    race = input.question("Which race would you like to be (Elf, Human, Dwarf): ");
    race = race.toLowerCase();
  
    for (i=0; i<raceOptions.length; i++){
      if (race === raceOptions[i]) {
        console.log(`You have chosen '${race}' as your race.`)
        correctRace = true;
      }
    }

    if (!correctRace){
      console.log(`${race} is not an option.`)
    }
  }
  return race;
}

function getClass(){
  let playerClass = '';
  let classOptions = ['warrior', 'mage', 'ranger'];
  let correctClass = false;
  while (correctClass === false){
    console.log(`Let's choose your class. This will determine what items your character uses, and what stats you get bonuses in.`);
    playerClass = input.question(`What class would you like to be (${classOptions}): `);
    playerClass = playerClass.toLowerCase();
    for (i=0; i<classOptions.length; i++){
      if (playerClass === classOptions[i]) {
        console.log(`You have chosen '${playerClass}' as your race.`)
        correctClass = true;
      }
    }
    if (correctClass === false){
      console.log(`${playerClass} is not an option.`)
    }
  }
  return playerClass;
}

function statGains(obj, stat, amt){
  return obj[stat] += amt;
}

charObject = {'name': '', 'race': '', 'class': '', 'hp': 10, 'atk': 10, 'str': 10, 'rng': 10, 'mgk': 10};

let player = buildChar(charObject);
player.name = getName();
player.race = getRace();
player.class = getClass();
//charObject.rng = statGains(charObject, 'rng', 10);
getStats(charObject);
