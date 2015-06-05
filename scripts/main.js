window.AdventureFight = window.AdventureFight || {};

(function(module){
 'use strict';

var hero = 'selectedHero';
var villain = 'selectedVillain';

AdventureFight.vent = _.extend({}, Backbone.Events);
AdventureFight.vent.on('choose:heroes', function(characters) {
  $('.characters').html(JST['home'](characters));
});


 $(document).ready(function(hero){
   $('.home').html(JST['home']());
   module.router = new module.AdventureRouter();
   Backbone.history.start();

    function hero(selectedHero){
      this.attack
      this.health
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
   
   function heroAttack(hero, villain){
        villain.health - hero.attack;
        return villian.health;
        console.log(villian.health);
   }
   
/////// villain section ////////

   function villain(selectedVillain){
     this.attack;
     this.health;
   }

   AdventureFight.villain = {

     'Ice King' : new villain({
       health: 100,
       attack: 10
     }),

     'Earl of Lemongrab' : new villain({
       health: 100,
       attack: 10
     }),

     'Princess Bubblegum' : new villain({
       health: 100,
       attack: 10
     }),

     'Magic Man' : new villain({
       health: 100,
       attack: 10
     }),

   }

 $(document).on('submit', '.heroes', function(event){
     event.preventDefault();
     AdventureFight.router.navigate('fight', {trigger: true});
     villain = villain[Math.floor(Math.random())];
     console.log(villain);
});

 $(document).on('submit', '.hero', function(event){
     event.preventDefault();
     heroAttack();
});

 });
})(window.AdventureFight);