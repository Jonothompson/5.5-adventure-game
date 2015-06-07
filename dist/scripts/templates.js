this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>AdWINture Time</h1>\n";
},"useData":true});
this["JST"]["fight"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"hero-fight\">\n\n	<div class=\"hero\">\n		<input class=\"hero-button\" type=\"submit\" name=\"health-hero\" value=\"fight\">\n	</div>\n\n</form>\n\n<form class=\"villain-fight\">\n\n	<div class=\"villian\">\n		<input class=\"villain-button\" type=\"submit\" name=\"name\" value=\"fight\">\n	</div>\n\n</form>\n";
},"useData":true});
this["JST"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"homePage\">\n\n\n\n<section class=\"logo\">\n  <img src=\"../logo.png\">\n</section>\n\n<div class=\"choose\">\n  <p>Choose your Adventurer!</p>\n</div>\n\n<form class=\"heroes\">\n\n\n<div class=\"finn\">\n  <input type=\"image\" name=\"name\" src=\"../finn.png\" height=\"230\">\n</div>\n\n\n<div class=\"jake\">\n  <input type=\"image\" name=\"name\" src=\"../jake.png\" height=\"230\" width=\"150\">\n</div>\n\n\n<div class=\"fionna\">\n  <input type=\"image\" name=\"name\" src=\"../fionna_8037.png\" height=\"230\" width=\"180\">\n</div>\n\n\n\n<div class=\"cake\">\n  <input type=\"image\" name=\"name\" src=\"../cake.png\" height=\"230\" width=\"230\">\n</div>\n\n</form>\n\n</div>\n";
},"useData":true});
this["JST"]["lose"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"losePage\">\n\n<div class=\"loser\">\n  <h1>You fell to the villain!</h1>\n  <input type=\"button\" name=\"replay\" value=\"Play Again!\">\n</div>\n\n</div>\n";
},"useData":true});
this["JST"]["villains"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class= \"villains\">\n\n  <div class=\"IceKing\">\n    <input type=\"image\" name=\"IceKing\" src=\"../iceking.gif\" height=\"230\" width=\"150\">\n  </div>\n\n  <div class=\"MagicMan\">\n    <input type=\"image\" name=\"MagicMan\" src=\"../magicman.png\" height=\"230\" width=\"150\">\n  </div>\n\n  <div class=\"Lemongrab\">\n    <input type=\"image\" name=\"Lemongrab\" src=\"../lemongrab.png\" height=\"230\" width=\"150\">\n  </div>\n\n  <div class=\"PrincessBubblegum\">\n    <input type=\"image\" name=\"PrincessBubblegum\" src=\"../princessbubblegum.png\" height=\"230\" width=\"150\">\n  </div>\n";
},"useData":true});
this["JST"]["win"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class = \"winPage\">\n\n<div class = \"winner\">\n  <h1>You defeated the villain!</h1>\n  <input type=\"button\" name=\"replay\" value=\"Play Again!\">\n</div>\n\n</div>\n";
},"useData":true});