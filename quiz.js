//base functionality for page

//enables bootstrap dropdown button to work
$('.dropdown-toggle').dropdown();


//basic robot object
 var BattleDome = {};

 BattleDome.Robot = function() {
    this.class = null;
    this.weapon = null;
    this.robotName = name;
    this.health = Math.floor(Math.random() * 40 + 100);
    this.strength = 0;
    this.intelligence = 0;
    this.speed = 0;
    this.agile = 0;
};


/*
    ASTRO DROID CLASS
    - R2D2
    - Hal

*/

BattleDome.Robot.Astro = function() {
  this.health = this.health + 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 30;
  this.agileBonus = 0;
  this.speedBonus = 0;
}

BattleDome.Robot.Astro.protoype = new BattleDome.Robot();

BattleDome.Robot.r2d2 = function() {
  this.name = "R2D2";
  this.health = this.health + 20;
  this.weapon = "stun gun";
  this.strengthBonus = - 10;
  this.intelligenceBonus = 30;
  this.agileBonus = 0;
  this.speedBonus = 2;
}

BattleDome.Robot.r2d2.protoype = new BattleDome.Robot.Astro();

BattleDome.Robot.hal = function() {
  this.name = "Hal";
  this.health = this.health + 30;
  this.weapon = "well timed space locks";
  this.strengthBonus = 20;
  this.intelligenceBonus = 40;
  this.agileBonus = 0;
  this.speedBonus = 10;
}

BattleDome.Robot.hal.protoype = new BattleDome.Robot.Astro();


/*
    BIPED DROID CLASS
    - C3P0
    - Data
    - K2-SO

*/

BattleDome.Robot.Biped = function() {
  this.health = this.health - 10;
  this.strengthBonus = 0;
  this.intelligenceBonus = 20;
  this.agileBonus = 20;
  this.speedBonus = 0;
}

BattleDome.Robot.Biped.protoype = new BattleDome.Robot();

BattleDome.Robot.c3po = function() {
  this.name = "C3PO";
  this.health = this.health - 5;
  this.weapon = "talking you to death";
  this.strengthBonus = - 10;
  this.intelligenceBonus = 20;
  this.agileBonus = 20;
  this.speedBonus = 0;
}

BattleDome.Robot.c3po.protoype = new BattleDome.Robot.Biped();

BattleDome.Robot.data = function() {
  this.name = "data";
  this.health = this.health + 30;
  this.weapon = "brute force and intelligence";
  this.strengthBonus = 25;
  this.intelligenceBonus = 20;
  this.agileBonus = 40;
  this.speedBonus = 10;
}

BattleDome.Robot.data.protoype = new BattleDome.Robot.Biped();

BattleDome.Robot.k2so = function() {
  this.name = "K2-SO"
  this.health = this.health;
  this.weapon = "biting sarcasm";
  this.strengthBonus = 15;
  this.intelligenceBonus = 20;
  this.agileBonus = 30;
  this.speedBonus = 5;
}

BattleDome.Robot.k2so.protoype = new BattleDome.Robot.Biped();


/*
    ALL Terrian DROID CLASS
    - BB8
    - Nanytes

*/

BattleDome.Robot.Terrian = function() {
  this.health = this.health;
  this.strengthBonus = 0;
  this.intelligenceBonus = 30;
  this.speedBonus = 20;
  this.agileBonus= 0;
}

BattleDome.Robot.Terrian.protoype = new BattleDome.Robot();


BattleDome.Robot.bb8 = function() {
  this.name = "BB8";
  this.health = this.health + 20;
  this.weapon = "flame thrower";
  this.strengthBonus = 0;
  this.intelligenceBonus = 30;
  this.speedBonus = 20;
  this.agileBonus= 5;
}

BattleDome.Robot.bb8.protoype = new BattleDome.Robot.Terrian();

BattleDome.Robot.nanytes = function() {
  this.name = "Nanytes";
  this.health = this.health;
  this.weapon = "assimilation";
  this.strengthBonus = - 10;
  this.intelligenceBonus = 30;
  this.speedBonus = 20;
  this.agileBonus= 0;
}

BattleDome.Robot.nanytes.protoype = new BattleDome.Robot.Terrian();
