//base functionality for page

//enables bootstrap dropdown button to work
$('.dropdown-toggle').dropdown();


//Global variables

var name = "";

//basic robot object
 var BattleDome = {};

 BattleDome.Robot = function() {
    this.weapon = [];
    this.robotName = name;
    this.health = Math.floor(Math.random() * 40 + 100);
    this.strength = 0;
    this.intelligence = 0;
    this.speed = 0;
    this.agile = 0;
    this.robotic = true;
};


/*
    ASTRO DROID CLASS
    - R2D2
    - Hal

*/

BattleDome.Robot.Astro = function() {
  this.strengthBonus = 0;
  this.intelligenceBonus = 30;
  this.agileBonus = 0;
  this.speedBonus = 0;
}

BattleDome.Robot.Astro.protoype = new BattleDome.Robot();

BattleDome.Robot.r2d2 = function() {
  this.name = "R2D2";
  //health between 60-100
  this.health = Math.floor(Math.random() * 40) + 60;
  this.weapon = "stun gun";
  this.strengthBonus = - 10;

  //damage between 20-45
  this.damage = Math.floor(Math.random() * 25) + 20;
}

BattleDome.Robot.r2d2.protoype = new BattleDome.Robot.Astro();

BattleDome.Robot.hal = function() {
  this.name = "Hal";
  // health between 30-60
  this.health = Math.floor(Math.random() * 30) + 30;
  this.weapon = "well timed space locks";
  this.strengthBonus = 20;
  //damage between 30-60
  this.damage = Math.floor(Math.random() * 30) + 30;
}

BattleDome.Robot.hal.protoype = new BattleDome.Robot.Astro();


/*
    BIPED DROID CLASS
    - C3P0
    - Data
    - K2-SO

*/

BattleDome.Robot.Biped = function() {
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.agileBonus = 20;
  this.speedBonus = 0;

}

BattleDome.Robot.Biped.protoype = new BattleDome.Robot();

BattleDome.Robot.c3po = function() {
  this.name = "C3PO";
  // health between 50-80
  this.health = Math.floor(Math.random() * 30) + 50;
  this.weapon = "talking you to death";
  this.strengthBonus = - 10;
  //damage between 10-20
  this.damage = Math.floor(Math.random() * 10) + 10;
}

BattleDome.Robot.c3po.protoype = new BattleDome.Robot.Biped();

BattleDome.Robot.data = function() {
  this.name = "data";
  // health between 100-150
  this.health = Math.floor(Math.random() * 50) + 100;
  this.weapon = "brute force and intelligence";
  this.strengthBonus = 25;
  //damage between 30-60;
  this.damage = Math.floor(Math.random() * 30) + 30;
}

BattleDome.Robot.data.protoype = new BattleDome.Robot.Biped();

BattleDome.Robot.k2so = function() {
  this.name = "K2-SO"
  //health between 80-100
  this.health = Math.floor(Math.random() * 20) + 80;
  this.weapon = "biting sarcasm";
  this.strengthBonus = 15;
  //damage between 20-45
  this.damage = Math.floor(Math.random() * 25) + 20;
}

BattleDome.Robot.k2so.protoype = new BattleDome.Robot.Biped();


/*
    ALL Terrian DROID CLASS
    - BB8
    - Nanytes

*/

BattleDome.Robot.Terrian = function() {
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.speedBonus = 20;
  this.agileBonus= 0;

}

BattleDome.Robot.Terrian.protoype = new BattleDome.Robot();


BattleDome.Robot.bb8 = function() {
  this.name = "BB8";
  // health between 80-100
  this.health = Math.floor(Math.random() * 20) + 80;
  this.weapon = "flame thrower";
  this.strengthBonus = 0;
  //damage between 20-50
  this.damage = Math.floor(Math.random() * 30) + 20;
}

BattleDome.Robot.bb8.protoype = new BattleDome.Robot.Terrian();

BattleDome.Robot.nanytes = function() {
  this.name = "Nanytes";
  //health between 40-60
  this.health = Math.floor(Math.random() * 20) + 40;
  this.weapon = "assimilation";
  this.strengthBonus = - 10;
  //damage between 30-80
  this.damage = Math.floor(Math.random() * 50) + 30;
}

BattleDome.Robot.nanytes.protoype = new BattleDome.Robot.Terrian();
