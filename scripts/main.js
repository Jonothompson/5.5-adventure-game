window.AdventureFight = window.AdventureFight || {};

(function(module){
  'use strict';

  AdventureFight.vent = _.extend({}, Backbone.Events);
 AdventureFight.vent.on('choose:heroes', function(characters) {
   $('.characters').html(JST['home'](characters));
 });


  $(document).ready(function(hero){
    $('.home').html(JST['home']());
    module.router = new module.AdventureRouter();
    Backbone.history.start();

    // function hero(){
    //   this.attack = attack;
    // }

    var jake = new hero('jake');
    var finn = new hero('finn');
    var fiona = new hero('fiona');
    var cake = new hero('cake');
    console.log(cake);

    $(document).on('submit', '.heroes', function(event){
   event.preventDefault();
   AdventureFight.router.navigate('fight', {trigger: true});
 });

  });
})(window.AdventureFight);
