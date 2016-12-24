
//base functionality for page

//enables bootstrap dropdown button to work
$('.dropdown-toggle').dropdown();

//hides alerts on page load
$(".alertType").hide();
$(".alertName").hide();

//Global variables

var name = "";

//basic robot object


Robot = function() {
    this.weapon = [];
    this.name = name;
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

Robot.Astro = function() {
  this.strengthBonus = 0;
  this.intelligenceBonus = 30;
  this.agileBonus = 0;
  this.speedBonus = 0;
}

Robot.Astro.prototype = new Robot();

Robot.r2d2 = function() {
  this.name = "R2D2";
  //health between 60-100
  this.health = Math.floor(Math.random() * 40) + 60;
  this.weapon = "stun gun";
  this.strengthBonus = - 10;

  //damage between 20-45
  this.damage = Math.floor(Math.random() * 25) + 20;
}

Robot.r2d2.prototype = new Robot.Astro();

Robot.hal = function() {
  this.name = "Hal";
  // health between 30-60
  this.health = Math.floor(Math.random() * 30) + 30;
  this.weapon = "well timed space locks";
  this.strengthBonus = 20;
  //damage between 30-60
  this.damage = Math.floor(Math.random() * 30) + 30;
}

Robot.hal.prototype = new Robot.Astro();


/*
    BIPED DROID CLASS
    - C3P0
    - Data
    - K2-SO

*/

Robot.Biped = function() {
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.agileBonus = 20;
  this.speedBonus = 0;

}

Robot.Biped.prototype = new Robot();

Robot.c3po = function() {
  this.name = "C3PO";
  // health between 50-80
  this.health = Math.floor(Math.random() * 30) + 50;
  this.weapon = "talking you to death";
  this.strengthBonus = - 10;
  //damage between 10-20
  this.damage = Math.floor(Math.random() * 10) + 10;
}

Robot.c3po.prototype = new Robot.Biped();

Robot.data = function() {
  this.name = "data";
  // health between 100-150
  this.health = Math.floor(Math.random() * 50) + 100;
  this.weapon = "brute force and intelligence";
  this.strengthBonus = 25;
  //damage between 30-60;
  this.damage = Math.floor(Math.random() * 30) + 30;
}

Robot.data.prototype = new Robot.Biped();

Robot.k2so = function() {
  this.name = "K2-SO"
  //health between 80-100
  this.health = Math.floor(Math.random() * 20) + 80;
  this.weapon = "biting sarcasm";
  this.strengthBonus = 15;
  //damage between 20-45
  this.damage = Math.floor(Math.random() * 25) + 20;
}

Robot.k2so.prototype = new Robot.Biped();


/*
    ALL Terrian DROID CLASS
    - BB8
    - Nanytes

*/

Robot.Terrian = function() {
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.speedBonus = 20;
  this.agileBonus= 0;

}

Robot.Terrian.prototype = new Robot();


Robot.bb8 = function() {
  this.name = "BB8";
  // health between 80-100
  this.health = Math.floor(Math.random() * 20) + 80;
  this.weapon = "flame thrower";
  this.strengthBonus = 0;
  //damage between 20-50
  this.damage = Math.floor(Math.random() * 30) + 20;
}

Robot.bb8.prototype = new Robot.Terrian();

Robot.nanytes = function() {
  this.name = "Nanytes";
  //health between 40-60
  this.health = Math.floor(Math.random() * 20) + 40;
  this.weapon = "assimilation";
  this.strengthBonus = - 10;
  //damage between 30-80
  this.damage = Math.floor(Math.random() * 50) + 30;
}

Robot.nanytes.prototype = new Robot.Terrian();

/*
  Functionality of the page

*/

//change the text of dropdown menu to match the selection


//changes the text of the left menu
$(function(){

    $(".robot1Select li a").click(function(){

      $(".btn-warning:first-child").text($(this).text());
      $(".btn-warning:first-child").val($(this).text());

   });
});

//changes the text of the right menu
$(function(){

    $(".dropdown-menu-right li a").click(function(){

      $(".btn-success:first-child").text($(this).text());
      $(".btn-success:first-child").val($(this).text());

   });

});


//If the user has selected two robots


function checkTypes() {
  if ($(".btn-success").text() === "Select Type " || $(".btn-warning").text() === "Select Type")
    $(".alertType").show();
  else if ($(".form-control").val() === "") {
    $(".alertName").show();
  }
  else {
    //Run attack function
  }
}

//When you click the attack button, check for  types and names

$(".attack").click(checkTypes);
