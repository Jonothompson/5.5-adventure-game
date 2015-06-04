window.AdventureFight = window.AdventureFight || {};

(function(module){
  'use strict';

var hero = selectedHero;
var villain = selectedVillain;

  AdventureFight.vent = _.extend({}, Backbone.Events);
 AdventureFight.vent.on('choose:heroes', function(characters) {
   $('.characters').html(JST['home'](characters));
 });


  $(document).ready(function(hero){
    $('.home').html(JST['home']());
    module.router = new module.AdventureRouter();
    Backbone.history.start();

    function hero(selectedHero){
      this.attack:
      this.health:

    }
//Hannah prototype
    AdventureFight.hero = {

      'Jake' : new hero({
        health: 100,
        attack: 10
      }),

      'Finn' : new hero({
        health: 100,
        attack: 10
      }),

      'Fiona' : new hero({
        health: 100,
        attack: 10
      }),

      'Cake' : new hero({
        health: 100,
        attack: 10
      }),

    }

    $(document).on('submit', '.heroes', function(event){
   event.preventDefault();
   AdventureFight.router.navigate('fight', {trigger: true});
 });

function villain(){
  this.attack:
  this.health:
  //create and assign randoms Meg
}

  var iceking = new villain('Ice King');
  var lemongrab = new villain('Earl of Lemongrab')

  $(document).on('submit', '.heroes', function(selectedVillain){
    villain.random()
});

  });
})(window.AdventureFight);



})();
