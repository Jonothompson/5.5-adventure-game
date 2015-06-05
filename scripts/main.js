window.AdventureFight = AdventureFight || {};
(function(){

  // Declare a variable that will later store the selected character and enemy
  var selectedHero;
  var selectedVillain;

  // Define a constructor
  AdventureFight.Hero = function(params) {
    _.extend(this, params);
  };

  AdventureFight.vent = _.extend({}, Backbone.Events);
  AdventureFight.vent.on('choose:heroes', function(characters) {
   $('.characters').html(JST['home'](characters));
  });

  // Give all characters an attack function
  AdventureFight.Hero.prototype.attack = function(villain) {
    villain.health = villain.health - this.attack;
    Game.vent.trigger('health:changed');
  };

  // Create some character instances
  AdventureFight.heroes = {
    'Jake': new AdventureFight.Hero({
      health: 12,
      attack: 1
    }),

    'Finn': new AdventureFight.Hero({
      health: 6,
      attack: 2
    })
  };

  AdventureFight.vent.on('hero:submit', function(hero) {
    selectedHero = hero;
  });

  AdventureFight.vent.on('hero:submit', function(villain) {
    selectedVillain = villain;
  });

  AdventureFight.vent.on('attack:villain', function() {
    selectedHero.attack(selectedVillain);
  });

})();
