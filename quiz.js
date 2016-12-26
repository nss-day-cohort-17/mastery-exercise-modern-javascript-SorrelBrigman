
//base functionality for page

//enables bootstrap dropdown button to work
$('.dropdown-toggle').dropdown();

//hides alerts on page load
$(".alertType").hide();
$(".alertName").hide();

//hide battle card on page load

$("#battle").hide();
//Global variables

var name = "";
var bot1;
var bot2;
var battleBot1;
var battleBot2;
var userName1;
var userName2;
var roundNumber = 1;

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
    this.attackDamage = 0;
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
  this.weapon = "non-stop dialogue";
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
  this.weapon = "assimilation process";
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


/*
  When the user clicks the finalize button button
*/

function checkTypes() {
  //if both type of robots aren't selected
  if ($(".btn-success").text() === "Select Type " || $(".btn-warning").text() === "Select Type") {
    //show the alert asking user to select both types
    $(".alertType").show();
  }
  //if the user hasn't named both robots
  else if ($(".form-control").val() === "") {
    // an alert is displayed prompting them to name both robots
    $(".alertName").show();
  }
  else {
    //Run finalize function
    finalize();
    //hide the jumbotron div
    $(".jumbotron").hide();
    //hide finalize button
    $(".finalize").hide();
  }
}

//When you click the finalize button, check for  types and names

$(".finalize").click(checkTypes);


function finalize() {
//Robot 1 is created
  bot1 = $(".btn-warning:first-child").text().toLowerCase();
  battleBot1 = new Robot[bot1];
  userName1 = $(".userName1").val();
  //base attack damage calculated
  damageValue(battleBot1);
//Robot 2 is created
  bot2 = $(".btn-success:first-child").text().toLowerCase();
  battleBot2 = new Robot[bot2];
  userName2 = $(".userName2").val();
  //base attack damage calcuclated
  damageValue(battleBot2);
  // robot cards are loaded
  loadInfo()
//Attack Button is enabled
  $(".attack").prop("disabled", false);
//Visual indicator that this has occurred
  //jumbotron section hidden. happens in checkTypes function
  //battle card shows
  $("#battle").show();
}

function loadInfo() {
  var card1 = `<h4>${userName1}</h4> <p>Health: ${battleBot1.health}</p> <p>Attack Damage: ${battleBot1.attackDamage}</p>`;
  $(".robot1").html(card1);
  var card2 = `<h4>${userName2}</h4><p>Health: ${battleBot2.health}</p><p>Attack Damage: ${battleBot2.attackDamage}</p>`;
  $(".robot2").html(card2);

}

/*
  When the user clicks the attack button button
*/

//function that calucates damage potential

function damageValue(whichRobot) {
  whichRobot.attackDamage = Math.floor(whichRobot.damage + ((whichRobot.strengthBonus * .5) + (whichRobot.intelligenceBonus * .5) + (whichRobot.agileBonus * .25) + (whichRobot.speedBonus * .75)) * (whichRobot.health / 100));
}

function updateRound() {
  roundNumber = roundNumber + 1;
  $(".scorecard").html(`<h3>Round: ${roundNumber}</h3>`);

}



// check for health function

function checkForHealth() {
  //if bot 2 health ===0, display  bot 1 won
  if (battleBot2.health <= 0) {

    console.log("bot 1 victory");
    ////display victory message for bot 2 //go
    var victory1 = `<h4>${userName1}, the ${battleBot1.name}, defeated ${userName2}, the ${battleBot2.name} with its ${battleBot1.weapon}!</h4>`;
    $("#battle .robot1").html(victory1);
    //display loss message for bot 2
    var loss2 = `<h4>${userName2} lost!</h4>`;
    $("#battle .robot2").html(loss2);
    //dis able attack button
    $(".attack").prop("disabled", true);
  }

  //if bot 1 health === 0 display bot 2 won
   else if (battleBot1.health <= 0) {
    //display victory message for bot 2
    var victory2 = `<h4>${userName2}, the ${battleBot2.name}, defeated ${userName1}, the ${battleBot1.name} with its ${battleBot2.weapon}!</h4>`;
    $("#battle .robot2").html(victory2);
    //display loss message for bot 2
    var loss1 = `<h4>${userName1} lost!</h4>`;
    $("#battle .robot1").html(loss1);
    //dis able attack button
    $(".attack").prop("disabled", true);
  } else {
  //if both >0 update health and damage
    loadInfo();

  }
}


//function that battles the bots
function robotBattle() {

//damage potential for bot 1 calculated
  damageValue(battleBot1);
//damage from bot1 subtracted from bot2 health
  battleBot2.health = battleBot2.health - battleBot1.attackDamage;
//check for health
  checkForHealth();
  //if the battle continues, calculate damage for bot 2
  if (battleBot2.health >= 0) {
//damge potential for bot 2 calculated
    damageValue(battleBot2);
//damge subtracted from bot1 health
    battleBot1.health = battleBot1.health - battleBot2.attackDamage;
//check for health
   checkForHealth();
//if the battle still continues
    if(battleBot1.health >= 0) {
  //and update the Round number
    updateRound();
    }
  }
}


//On clicking the attack function, the robotBattle function runs

$(".attack").click(robotBattle);
