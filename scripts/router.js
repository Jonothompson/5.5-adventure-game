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

  fight: function() {
    $('.home').html(JST['fight']());
  },

  win: function() {
    $('.home').html(JST['win']());
  },

  lose: function() {
    $('.home').html(JST['lose']());
  }
});

})(window.AdventureFight);
