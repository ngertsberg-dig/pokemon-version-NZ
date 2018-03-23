

var firstPokemon = localStorage.getItem('pokemonOneStorage');
var secondPokemon = localStorage.getItem('pokemonTwoStorage');
var firstLink = "http://pokeapi.salestock.net/api/v2/pokemon-form/" + firstPokemon;
var secondLink = "http://pokeapi.salestock.net/api/v2/pokemon-form/" + secondPokemon;
$.get(firstLink,function(data){
$(".pokemon-image-container-1").html("<img src = '" + data.sprites.front_default +"'>");
$(".pokemon-name-container-1").html("<h1>" + data.name + "</h1>");
},'json');
$.get(secondLink,function(data){
$(".pokemon-image-container-2").html("<img src = '" + data.sprites.front_default +"'>");
$(".pokemon-name-container-2").html("<h1>" + data.name + "</h1>");
},'json');



new Vue({
  el:"#app",
  data:{

    playerHealth:100,
    monsterHealth:100,
    gameIsRunning:false,
    moves:[],
    count:0,
    specialAttack:false
  },
  methods:{
    startGame:function(){
        this.gameIsRunning = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.moves = [];

    },
    giveUp:function(){
      this.gameIsRunning = false;
    },
    attack:function(){
      this.count++;
      if(this.count>=5){
        this.specialAttack = true;
      }
      else{
        this.specialAttack =false;
      }
      var playerAttack = Math.floor((Math.random() * 10) +1 );
      var monsterAttack = Math.floor((Math.random() * 10) +1 );
      this.playerHealth = this.playerHealth - monsterAttack;
      this.monsterHealth = this.monsterHealth - playerAttack;

      this.moves.push($(".pokemon-name-container-1").text() + " gets hit for " + monsterAttack + "!");
      this.moves.push($(".pokemon-name-container-2").text() + " gets hit for " + playerAttack + "!");
      if(this.playerHealth <=0){
      alert($(".pokemon-name-container-2").text().toUpperCase() + " Won!");
        this.gameIsRunning = false;
      }
      else if(this.monsterHealth <=0){
        alert($(".pokemon-name-container-1").text().toUpperCase() + " Won!");
          this.gameIsRunning = false;

    }

  },
  heal:function(){
    var playerHeal = Math.floor((Math.random() * 10) +1 );
    var monsterAttack = Math.floor((Math.random() * 10) +1 );
    this.playerHealth = this.playerHealth + playerHeal;
    this.playerHealth = this.playerHealth - monsterAttack;

    this.moves.push($(".pokemon-name-container-1").text().toUpperCase() + " Heals for " + playerHeal + " !");
    this.moves.push($(".pokemon-name-container-1").text().toUpperCase() + "gets hit for " + monsterAttack + "!");
    if(this.playerHealth <=0){
      alert($(".pokemon-name-container-2").text().toUpperCase() + " Won!");
      this.gameIsRunning = false;
    }
    else if(this.monsterHealth <=0){
      alert($(".pokemon-name-container-1").text().toUpperCase() + " Won!");
        this.gameIsRunning = false;

  }
},
specialAttackClick:function(){

                var animation = new TimelineLite()
                animation.to($(".healthbar .monster-bar"), 0.2, {scale:1.3, ease:Linear.easeNone})
                             .to($(".healthbar .monster-bar"), 0.2, {scale:1, ease:Linear.easeNone});

  var playerAttack = Math.floor((Math.random() * 20) +1 );
  var monsterAttack = Math.floor((Math.random() * 10) +1 );
  this.playerHealth = this.playerHealth - monsterAttack;
  this.monsterHealth = this.monsterHealth - playerAttack;

  this.moves.push($(".pokemon-name-container-1").text() + " gets hit for " + monsterAttack + " !");
  this.moves.push($(".pokemon-name-container-2").text() + " gets hit for " + playerAttack + "!.. Special attack!!");
  if(this.playerHealth <=0){
      alert($(".pokemon-name-container-2").text() + " Won!");
    this.gameIsRunning = false;
  }
  else if(this.monsterHealth <=0){
    alert($(".pokemon-name-container-1").text() + " Won!");
      this.gameIsRunning = false;

}
  this.count = 0;
  this.specialAttack = false;


}
  }
})

$(".special").click(function(){
alert("start game")

});

$("#special-attack").click(function(){
  var animation = new TimelineLite()
animation.to($(".healthbar .monster-bar"), 0.2, {scale:1.3, ease:Linear.easeNone})
             .to($(".healthbar .monster-bar"), 0.2, {scale:1, ease:Linear.easeNone});



});
