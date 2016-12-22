//base functionality for page

//enables bootstrap dropdown button to work
$('.dropdown-toggle').dropdown();


//Global variables

var name = "";

//basic robot object
 var BattleDome = {};

  let Robot = {
    weapon: [],
    robotName: name,
    health: Math.floor(Math.random() * 40 + 100),
    strength: 0,
    intelligence: 0,
    speed: 0,
    agile: 0,
    robotic: true
};


/*
    ASTRO DROID CLASS
    - R2D2
    - Hal

*/

let astro = function astro () {
  return Object.assign(Object.create(Robot), {
    strengthBonus: 0,
    intelligenceBonus: 30,
    agileBonus: 0,
    speedBonus: 0
  });
};

astro.prototype =Object.create(Robot.prototype);


let r2d2 = function r2d2 () {
  return Object.assign(Object.create(astro), {
    robotName: "R2D2",
    //health between 60-100
    health: Math.floor(Math.random() * 40) + 60,
    weapon: "stun gun",
    strengthBonus: - 10,
    //damage between 20-45
    damage: Math.floor(Math.random() * 25) + 20
  });
}


let hal = function hal() {
  return Object.assign(Object.create(astro), {
    name: "Hal",
    // health between 30-60
    health: Math.floor(Math.random() * 30) + 30,
    weapon: "well timed space locks",
    strengthBonus: 20,
    //damage between 30-60
    damage: Math.floor(Math.random() * 30) + 30,


  })
}



/*
    BIPED DROID CLASS
    - C3P0
    - Data
    - K2-SO

*/

// BattleDome.Robot.Biped = function() {
//   this.strengthBonus = 0;
//   this.intelligenceBonus = 0;
//   this.agileBonus = 20;
//   this.speedBonus = 0;

// }

// BattleDome.Robot.Biped.protoype = new BattleDome.Robot();

// BattleDome.Robot.c3po = function() {
//   this.name = "C3PO";
//   // health between 50-80
//   this.health = Math.floor(Math.random() * 30) + 50;
//   this.weapon = "talking you to death";
//   this.strengthBonus = - 10;
//   //damage between 10-20
//   this.damage = Math.floor(Math.random() * 10) + 10;
// }

// BattleDome.Robot.c3po.protoype = new BattleDome.Robot.Biped();

// BattleDome.Robot.data = function() {
//   this.name = "data";
//   // health between 100-150
//   this.health = Math.floor(Math.random() * 50) + 100;
//   this.weapon = "brute force and intelligence";
//   this.strengthBonus = 25;
//   //damage between 30-60;
//   this.damage = Math.floor(Math.random() * 30) + 30;
// }

// BattleDome.Robot.data.protoype = new BattleDome.Robot.Biped();

// BattleDome.Robot.k2so = function() {
//   this.name = "K2-SO"
//   //health between 80-100
//   this.health = Math.floor(Math.random() * 20) + 80;
//   this.weapon = "biting sarcasm";
//   this.strengthBonus = 15;
//   //damage between 20-45
//   this.damage = Math.floor(Math.random() * 25) + 20;
// }

// BattleDome.Robot.k2so.protoype = new BattleDome.Robot.Biped();


// /*
//     ALL Terrian DROID CLASS
//     - BB8
//     - Nanytes

// */

// BattleDome.Robot.Terrian = function() {
//   this.strengthBonus = 0;
//   this.intelligenceBonus = 0;
//   this.speedBonus = 20;
//   this.agileBonus= 0;

// }

// BattleDome.Robot.Terrian.protoype = new BattleDome.Robot();


// BattleDome.Robot.bb8 = function() {
//   this.name = "BB8";
//   // health between 80-100
//   this.health = Math.floor(Math.random() * 20) + 80;
//   this.weapon = "flame thrower";
//   this.strengthBonus = 0;
//   //damage between 20-50
//   this.damage = Math.floor(Math.random() * 30) + 20;
// }

// BattleDome.Robot.bb8.protoype = new BattleDome.Robot.Terrian();

// BattleDome.Robot.nanytes = function() {
//   this.name = "Nanytes";
//   //health between 40-60
//   this.health = Math.floor(Math.random() * 20) + 40;
//   this.weapon = "assimilation";
//   this.strengthBonus = - 10;
//   //damage between 30-80
//   this.damage = Math.floor(Math.random() * 50) + 30;
// }

// BattleDome.Robot.nanytes.protoype = new BattleDome.Robot.Terrian();
