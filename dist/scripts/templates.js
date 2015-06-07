this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
<<<<<<< HEAD
    return "<h1>AdWINture Time</h1>\n";
},"useData":true});
this["JST"]["fight"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
<<<<<<< HEAD
    var helper;

  return "<div class=\"hero\">\n	<input type=\"submit\" name=\"name\" value=\"fight\">\n	"
    + this.escapeExpression(((helper = (helper = helpers.selectedHero || (depth0 != null ? depth0.selectedHero : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedHero","hash":{},"data":data}) : helper)))
    + "\n</div>\n\n<div class=\"villian\">\n	<input type=\"submit\" name=\"name\" value=\"submit\">\n</div>\n";
=======
    return "\n<div class=\"page2\"></div>\n<div class=\"fightPage\">\n   <header> <p> Ready. Set. Fight! </p> </header>\n\n<div class=\"hero\">\n  <div class=\"heroPicture\"><img src=\"../finnfight.png\"></div>\n\n<div class=\"heroinfo\">\n\n  <p> Select Your Attack</p>\n  <div class=\"attack1\"> <input type=\"button\" id=\"attack1\" name=\"name\" value=\"Sword\" height=\"230\" width=\"180\"> </div>\n  <div class=\"attach2\"> <input type=\"button\" id=\"attack2\" name=\"attack1\" value=\"Mace\" width=\"200\"></div>\n  <div class=\"health\">  </div>\n</div>\n</div>\n\n<div class=\"villain\">\n<div class=\"villainPicture\"><img src=\"../iceking.gif\"></div>\n\n<div class=\"villaininfo\">\n  <p> Defeat the Villain! </p>\n\n  <div class=\"attack1\"> <input type=\"button\" id=\"attack1\" name=\"name\" value=\"Sword\" height=\"230\" width=\"180\"> </div>\n  <div class=\"attach2\"> <input type=\"button\" id=\"attack2\" name=\"attack1\" value=\"Mace\" width=\"200\"></div>\n  <div class=\"health\">  </div>\n</div>\n</div>\n\n\n</div>\n";
>>>>>>> refs/remotes/origin/HJ-develop
},"useData":true});
this["JST"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"homePage\">\n\n\n\n<section class=\"logo\">\n  <img src=\"../logo.png\">\n</section>\n\n<div class=\"choose\">\n  <p>Choose your Adventurer!</p>\n</div>\n\n<form class=\"heroes\">\n\n\n<div class=\"finn heroSelect\">\n  <input type=\"image\" name=\"Finn\" src=\"../finn.png\" height=\"230\">\n</div>\n\n\n<div class=\"jake heroSelect\">\n  <input type=\"image\" name=\"Jake\" src=\"../jake.png\" height=\"230\" width=\"150\">\n</div>\n\n\n<div class=\"fionna heroSelect\">\n  <input type=\"image\" name=\"Fionna\" src=\"../fionna_8037.png\" height=\"230\" width=\"180\">\n</div>\n\n\n\n<div class=\"cake heroSelect\">\n  <input type=\"image\" name=\"Cake\" src=\"../cake.png\" height=\"230\" width=\"230\">\n</div>\n\n</form>\n\n</div>\n";
},"useData":true});
this["JST"]["lose"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["villains"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class= \"villains\">\n\n  <div class=\"IceKing\">\n    <input type=\"image\" name=\"IceKing\" src=\"../iceking.gif\" height=\"230\" width=\"150\">\n  </div>\n\n  <div class=\"MagicMan\">\n    <input type=\"image\" name=\"MagicMan\" src=\"../magicman.png\" height=\"230\" width=\"150\">\n  </div>\n\n  <div class=\"Lemongrab\">\n    <input type=\"image\" name=\"Lemongrab\" src=\"../lemongrab.png\" height=\"230\" width=\"150\">\n  </div>\n\n  <div class=\"PrincessBubblegum\">\n    <input type=\"image\" name=\"PrincessBubblegum\" src=\"../princessbubblegum.png\" height=\"230\" width=\"150\">\n  </div>\n";
},"useData":true});
this["JST"]["win"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
=======
    return "<h1>Hello</h1>\n";
>>>>>>> master
},"useData":true});