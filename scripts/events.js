  window.AdventureFight = window.AdventureFight || {};
  
  AdventureFight.vent = _.extend({}, Backbone.Events);
  AdventureFight.vent.on('choose:heroes', function(heroes) {
   $('.heroes').html(JST['home'](heroes));
  });