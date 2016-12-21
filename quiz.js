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
  this.health = this.health + 20;
  this.strengthBonus = - 10;
  this.intelligenceBonus = 30;
  this.agileBonus = 0;
  this.speedBonus = 2;
}

BattleDome.Robot.r2d2.protoype = new BattleDome.Robot.Astro();

BattleDome.Robot.hal = function() {
  this.health = this.health + 30;
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
  this.health = this.health - 5;
  this.strengthBonus = - 10;
  this.intelligenceBonus = 20;
  this.agileBonus = 20;
  this.speedBonus = 0;
}

BattleDome.Robot.c3po.protoype = new BattleDome.Robot.Biped();

BattleDome.Robot.data = function() {
  this.health = this.health + 30;
  this.strengthBonus = 25;
  this.intelligenceBonus = 20;
  this.agileBonus = 40;
  this.speedBonus = 10;
}

BattleDome.Robot.data.protoype = new BattleDome.Robot.Biped();

BattleDome.Robot.k2so = function() {
  this.health = this.health;
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
  this.health = this.health + 20;
  this.strengthBonus = 0;
  this.intelligenceBonus = 30;
  this.speedBonus = 20;
  this.agileBonus= 5;
}

BattleDome.Robot.bb8.protoype = new BattleDome.Robot.Terrian();

BattleDome.Robot.nanytes = function() {
  this.health = this.health;
  this.strengthBonus = - 10;
  this.intelligenceBonus = 30;
  this.speedBonus = 20;
  this.agileBonus= 0;
}

BattleDome.Robot.nanytes.protoype = new BattleDome.Robot.Terrian();
