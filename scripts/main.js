
window.AdventureFight = window.AdventureFight || {};

(function(){
 'use strict';
 // Declare a variable that will later store the selected character and enemy
 var selectedHero;
 var selectedVillain;

 // Define a constructor
   $(document).ready(function(hero){
   $('.home').html(JST['home']());
   AdventureFight.router = new AdventureFight.AdventureRouter();
   Backbone.history.start();
});

 AdventureFight.Hero = function(params) {
   _.extend(this, params);
 };

   // Give all characters an attack function


 function attackVillain (selectedHero, selectedVillain) {
   selectedHero.attack - selectedVillain.health;
 }

function selectedVillain (type) {
 this.type = type;
}

var villain = new Array();
villain [0] = new selectedVillain ("Ice King");
villain [1] = new selectedVillain ("Magic Man");
villain [2] = new selectedVillain ("Lemon Grab");
villain [3] = new selectedVillain ("Princess Bubblegum");

villain = _.sample(villain);

function villain (options){
 options = options || {};
 this.health = 100 || options.health;
 this.name = '' || options.name;
 this.weapons = [{ type: 'sword', points: [3,10]
 },
 {type: 'mace', points: [2,6]
 }];
};

function selectedHero (type) {
 this.type = type;
}

var heroes = new Array();
heroes [0] = new selectedHero ("Finn");
heroes [1] = new selectedHero ("Jake");
heroes [2] = new selectedHero ("Fionna");
heroes [3] = new selectedHero ("Cake");

//hero = _.sample(hero);

function heroStats (options){
 options = options || {};
 this.health = 100 || options.health;
 this.name = '' || options.name;
 this.weapons = [{ type: 'sword', points: [3,10]
 },
 {type: 'mace', points: [2,6]
 }];
};

 $(document).on('click', '.heroSelect', function(event){
     event.preventDefault();
     AdventureFight.router.navigate('fight', {trigger: true});
     console.log(villain);
     var name = $(event.target).attr('name');
     var hero = _.where(heroes, {type : name});
     console.log(hero);
 });
 
// // Attack prototype
//selectedHero.prototype.attack = function(attacked, health, type) {
//    if (health) {
//        health = health.split(',');
//        health = randomNum(+hitPoints[0], +hitPoints[1]);
//    }
//        else health = randomNum(0, 10);
//    attacked.health = attacked.health - hitPoints;
//    if (this instanceof User) {
//        $(".human .attack-history").html("<li>Attacked with "+type+" and took " + health + " health points from " + villain.name + "</li>");
//    } else
//        $(".computer .attack-history").html("<li>Attacked "+type+" and took " + health + " health points from " + heroes.name + "</li>");
//};
//
//// Attack method
//$(document).on("click", ".attack", function(e) {
//    e.preventDefault();
//
//    var pointSub = $(this).closest(".selectedHero").find(".selected name").attr("points"); //getEngageOption("points");
//
//    var type = $(this).closest(".selectedHero").find(".selected name").text();
//
//    var computerWeapon = randomNum(0, computer.weapons.length-1);
//    heroes.attack(villain, pointSub, type);
//    villain.attack(heroes, pointSub, villain.weapons[computerWeapon].type);
//
//    checkHealth(heroes.health, villain.health);
//
//    updateHealthBar();
//
//    animatePlayers();
//
//});
//
//function updateHealthBar() {
//
//    $(".selectedHero .health span").css({
//        width: heroes.health + "%"
//    });
//    
//    $(".selectedVillain .health span").css({
//        width: villain.health + "%"
//    });
//    
//};
//    
//function animatePlayers() {
//    $('#selectedHero-image').toggleClass('selectedHero-attack');
//    $('#villain-image').toggleClass('villain-attack');
//    $('#selectedHero-image').toggleClass('selectedHero-idle');
//    $('#villain-image').toggleClass('villain-idle');
//};

})();




