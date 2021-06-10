const input = require('readline-sync');

function getStats(character){
  console.log(`${character.name} has the following stats:\nhp: ${character.hp}\nattack: ${character.atk}\nstrength: ${character.str}\nrange: ${character.rng}\nmagic: ${character.mgk}`);
}

function buildChar(obj){
  userChar = {};
  keys = Object.keys(obj);
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
    words = name.split(" ");
    firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    lastName = words[1].charAt(0).toUpperCase() + words[1].slice(1).toLowerCase();
    name = firstName + " " + lastName;
  } else {
    name = (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
  }
  return name;
}

function getName(){
correctName = false;
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
  raceOptions = ["elf", "human", "dwarf"];
  raceOptionsCapitalized = ["Elf", "Human", "Dwarf"];
  correctRace = false;
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

charObject = {'name': '', 'race': '', 'class': '', 'hp': 10, 'atk': 10, 'str': 10, 'rng': 10, 'mgk': 10};

player = buildChar(charObject);
player.name = getName();
player.race = getRace();
getStats(player);
