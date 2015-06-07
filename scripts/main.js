
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
 this.src = type;
}

var villain = new Array();
villain [0] = new selectedVillain ("../iceking.gif");
villain [0].src = "../iceking.gif";
villain [1] = new selectedVillain ("../magicman.png");
villain [1].src = "../magicman.png";
villain [2] = new selectedVillain ("../lemongrab.png");
villain [2].src = "../lemongrab.png";
villain [3] = new selectedVillain ("../princessbubblegum.png");
villain [3].src = "../princessbubblegum.png";

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

var hero = new Array();
hero [0] = new selectedHero ("Finn");
hero [0].src = "../finn.png";
hero [1] = new selectedHero ("Jake");
hero [1].src = "../jake.png";
hero [2] = new selectedHero ("Fionna");
hero [2].src = "../fionna_8037.png";
hero [3] = new selectedHero ("Cake");
hero [3].src = "../cake.png";


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

})();
