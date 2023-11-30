

//Ejercicio 3: Mayor Edad

let nombre1 = (prompt("Ingresa un nombre"));
let edad1 = parseInt(prompt("Ingresa su edad"));
let nombre2 = (prompt("Ingresa otro nombre"));
let edad2= parseInt(prompt("Ingresa su edad"));
let nombre3=(prompt("Ingresa un ultimo nombre"));
let edad3= parseInt(prompt("Ingresa su edad"));

if(edad1>edad2 && edad1>edad3){

    alert("La persona de mayor edad es " + nombre1);
    
}else if(edad2>edad1 && edad2>edad3){
    alert("La persona de mayor edad es "+ nombre2);
}

    

else if(edad3>edad1 && edad3>edad2){

    alert("La persona de mayor edad es "+ nombre3);

}





//Ejercicio 4 : Cuantas vocales hay en el texto

let palabra=(prompt("Ingresa una palabra"));


numVocales = contarVocales(palabra);

function contarVocales(palabra){

    let contar = palabra.match(/[aeiou]/gi).length;

    return contar;


}

(alert("La palabra contiene "+ numVocales + " vocales" ));


    








