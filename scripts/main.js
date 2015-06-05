window.AdventureFight = window.AdventureFight || {};
(function(){
  'use strict';

  // Declare a variable that will later store the selected character and enemy
  var selectedHero;
  var selectedVillain;

  var villain;

  // Define a constructor
    $(document).ready(function(hero){
    $('.home').html(JST['home']());
    AdventureFight.router = new AdventureFight.AdventureRouter();
    Backbone.history.start();
});

AdventureFight.Hero = function(params) {
  _.extend(this, params);
};
  AdventureFight.vent = _.extend({}, Backbone.Events);
  AdventureFight.vent.on('choose:heroes', function(heroes) {
   $('.heroes').html(JST['home'](heroes));
  });


    // Give all characters an attack function
  AdventureFight.Hero.prototype.attack = function(villain) {
    villain.health = villain.health - this.attack;
    AdventureFight.vent.trigger('health:changed');
  };

  // Create some character instances
  AdventureFight.heroes = {
    'Jake': new AdventureFight.Hero({
      health: 100,
      attack: 10
    }),

    'Finn': new AdventureFight.Hero({

      health: 100,
      attack: 10
    }),

    'Fionna': new AdventureFight.Hero({
      health: 100,
      attack: 10
    }),

    'Cake': new AdventureFight.Hero({
      health: 100,
      attack: 10

      health: 6,
      attack: 2
    }),

    'Fiona': new AdventureFight.Hero({
      health: 12,
      attack: 1
    }),

    'Cake': new AdventureFight.Hero({
      health: 6,
      attack: 2
    })
  };

  AdventureFight.Villain = function(params) {
    _.extend(this, params);
  };

  // Give all villains an attack function
  AdventureFight.Villain.prototype.attack = function(hero) {
    hero.health = hero.health - this.attack;
    AdventureFight.vent.trigger('health:changed');
  };

  AdventureFight.villains = {
    'Ice King': new AdventureFight.Villain({
      health: 100,
      attack: 10
    }),

    'Magic Man': new AdventureFight.Villain({
      health: 100,
      attack: 10
    })
  };

  $(document).on('submit', '.heroes', function(event){
      event.preventDefault();
      AdventureFight.router.navigate('fight', {trigger: true});
      selectedHero = hero;
      console.log(selectedHero);
      //  villain = villain[Math.floor(Math.random())];
      // console.log(villain);
  });

  AdventureFight.vent.on('hero:submit', function(hero) {
    selectedHero = Hero;

  });

  AdventureFight.vent.on('hero:submit', function(villain) {
    selectedVillain = _.sample(AdventureFight.Villain, [n]);
    console.log(selectedVillain);
  });

  AdventureFight.vent.on('attack:villain', function() {
    selectedHero.attack(selectedVillain);
  });

})();
