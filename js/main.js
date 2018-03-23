
if(!$(".pokemon-box").is(":visible")){
  $("body").append("<h1 id = 'fetching'><img src = 'lava.gif'>Fetching Pokemon<img src = 'lava.gif'></h1>");
}
function checkIfLoaded(){
  if($(".pokemon-box").is(":visible")){
    $("#fetching").remove();
  }
}
setInterval(checkIfLoaded,1);
$("#startFightButton").hide();
//API script to grab all the pokemon
for(var pokemonNumber = 1;pokemonNumber!=722;pokemonNumber++){
  var link  = "http://pokeapi.salestock.net/api/v2/pokemon-form/" + pokemonNumber;
$.get( link , function( data ) {
  $( "#pokemon ul" ).append("<li><div class = 'pokemon-box " + data.name +"'" + "id =" + "'" + data.id +"'" + "style = 'display:none;position:relative;left:-150px;transition:all 0.55s ease;transform:rotateZ(30deg);'><img src = "+ data.sprites['front_default'] +">" + "<p class = 'pokemon-info'>" +  data.name + "</p></li>");
  $(".pokemon-box").fadeIn(1000);
  $(".pokemon-box").css({"transform":"translateX(150px)"});
}, "json" );
}


//click function when a user clicks a box
$("ul").click(function(e){
  var clickDiv = e.target;
  var clickedPokemon = $(clickDiv).parent();
$(".versus").addClass("display-pokemon-overlay");
if($(".versus").hasClass("display-pokemon-overlay")){
$(".versus").css({"opacity":"1"});
}
$("body").toggleClass("firstPokemonPicked");


var clickedPokemonID = $(clickedPokemon).attr("id");
var clickedPokemonImage = $(clickedPokemon).find("img").attr("src");

if($("body").hasClass("firstPokemonPicked")){
$(".versus-one").html('<img src =" ' + clickedPokemonImage + '" id = "' + clickedPokemonID + '">');
}
else{
$(".versus-two").html('<img src =" ' + clickedPokemonImage + '" id = "' + clickedPokemonID + '">');
$("#startFightButton").fadeIn();
}
});


$("#startFightButton").click(function(){

var pokemonIDOne = $(".versus-one img").attr("id");
var pokemonIDTwo  = $(".versus-two img").attr("id");

localStorage.setItem("pokemonOneStorage",pokemonIDOne);
localStorage.setItem("pokemonTwoStorage",pokemonIDTwo);

window.location.href = 'fightIndex.html'
});
