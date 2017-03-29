function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function(){
    console.log("Hola, me llamo " + this.nombre)
  };

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }

  this.beber = function(tipoAlcohol){
    if(tipoAlcohol == "chelas"){
      this.nivelDeAmistad += 80
    }
    else if (tipoAlcohol == "vodka") {
      this.nivelDeAmistad += 10
    }
  };
}

function crearPokemon(){
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon =  document.getElementById("colorPokemon");
  var puntosAtaque =  document.getElementById("puntosAtaque");

  var pokemon = new Pokemon(nombrePokemon.value,
                            colorPokemon.value,
                            Number(puntosAtaque.value)
                           )
  mostrarPokemon(pokemon);
}

function mostrarPokemon(pokemon) {
    var opcionPokemon = document.getElementById("opcionPokemon");
    var select1 = document.getElementById("pokemon1");
    var select2 = document.getElementById("pokemon2");
    var opcion1 = document.createElement("option");
    var opcion2 = document.createElement("option");
    opcion1.innerText = pokemon.nombre;
    opcion2.innerText = pokemon.nombre;
    select1.appendChild(opcion1);
    select2.appendChild(opcion2);
}


function aPelear(pokemon) {
  var pokemon1 = document.getElementById("pokemon1").value;
  var pokemon2 = document.getElementById("pokemon2").value;
  pokemon1.pelear(pokemon2);
}
/*var pikachu = new Pokemon("Pikachu","amarillo",80);
var charmander  = new Pokemon("Charmander","rojo",30);

pikachu.pelear(charmander)
console.log(charmander.vida)
*/
