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

var hero = new Array();
hero [0] = new selectedHero ("Finn");
hero [1] = new selectedHero ("Jake");
hero [2] = new selectedHero ("Fionna");
hero [3] = new selectedHero ("Cake");

hero = _.sample(hero);

function hero (options){
 options = options || {};
 this.health = 100 || options.health;
 this.name = '' || options.name;
 this.weapons = [{ type: 'sword', points: [3,10]
 },
 {type: 'mace', points: [2,6]
 }];
};

 $(document).on('submit', '.heroes', function(event){
     event.preventDefault();
     AdventureFight.router.navigate('fight', {trigger: true});
     console.log(villain);
     console.log(hero);
 });

//This is a test


})();
