window.AdventureFight = window.AdventureFight || {};

(function(module){

module.AdventureRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'fight': 'fight',
    'win': 'win',
    'lose': 'lose'
  },

  index: function(){
    $('.home').html(JST['home']());
  },

//this function is working
  fight: function() {
    $('.home').html(JST['fight']());

    
//    $('.hero').trigger('click', function(){
//      AdventureFight.vent.trigger('attack:villain');
//    });

//    $('attach:villain').listenTo('change:health', function(){
//      AdventureFight.vent.trigger('attack:hero');
//    });
  },

  win: function() {
    $('.home').html(JST['win']());
  },

  lose: function() {
    $('.home').html(JST['lose']());
  }
});

})(window.AdventureFight);
