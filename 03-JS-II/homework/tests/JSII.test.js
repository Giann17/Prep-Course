/* eslint-disable no-undef */
const {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
} = require('../homework');


describe('obtenerMayor(x, y)', function() {
  it('should return x if it is larger than y', function() {
    expect(obtenerMayor(10, 5)).toBe(10);
  });
  it('should return y if it is larger than x', function() {
    expect(obtenerMayor(50, 100)).toBe(100);
  });
  it('should return either one if they are the same', function() {
    expect(obtenerMayor(1000, 1000)).toBe(1000);
  });
});
 
function obtenerMayor (x, y){
//"x" e "y" son numeros enteros. (int)
//devuelve el numero mas grande
//si son iguales, sale cualquiera de los dos
if (x, y) {
  return x;
}
return y;
}


describe('mayoriaDeEdad(edad)', function() {
  it('should return \'Allowed\'if edad is equal or greater than 18', function() {
    expect(mayoriaDeEdad(18)).toBe('Allowed');
    expect(mayoriaDeEdad(35)).toBe('Allowed');
  });
  it('should return \'Not allowed\'if edad is less than 18', function() {
    expect(mayoriaDeEdad(7)).toBe('Not allowed');
  });
});

function mayoriaDeEdad (edad){
//determinar si la persona segun su edad puede ingresar a un evento
//si tiene 18 años o mas, devolver --> "Allowed"
//si es menor, devolver --> "Not Allowed"
if (edad >= 18 ){
  return "Allowed";
}
else {
  return "not allowed";
}
}


describe('conection(status)', function() {
  it('should return the conection state of user', function() {
    expect(conection(1)).toBe('Online');
    expect(conection(2)).toBe('Away');
    expect(conection(3)).toBe('Offline');
    expect(conection()).toBe('Offline');
  });
});

function conection (status){
  //recibimos un estado de conexion de un usuario representado por un valor numerico
  //cuando el estado es igual a 1, el usuario esta "Online"
  //cuando el estado es igual a 2, el usurioo esta "Away"
  //de lo contrario, presumimos que el usuario esta "Offline"
  //devolver el estado de conexion del usuario en cada caso
  if (status === 1){
    return "Online";
  }
  else if (status === 2){
    return "Away";
  }
  else {
    return "Offline";
  }
}



describe('saludo(idioma)', function() {
  it('should return \'Guten Tag!\' for aleman', function() {
    expect(saludo('aleman')).toBe('Guten Tag!');
  });
  it('should return \'Hola!\' for ingles', function() {
    expect(saludo('ingles')).toBe('Hello!');
  });
  it('should return \'Ni Hao!\' for mandarin', function() {
    expect(saludo('mandarin')).toBe('Ni Hao!');
  });
  it('should return \'Hola!\' if no argument is passed in or if a idioma beyond ingles, mandarin, and aleman is passed in.', function() {
    expect(saludo('frances')).toBe('Hola!');
    expect(saludo()).toBe('Hola!');
  });
});

function saludo(idioma){
  //devuelve un saludo en tres diferentes lenguajes:
  //si "idioma" es "aleman", devuelve "Guten Tag!"
  //si "idioma" es "mandarin", devuelve "Ni Hao!"
  //si "idioma" es "ingles", devuelve "Hello!"
  //si "idioma" no es ninguno de los anteriores o es ´undefined´, devuelve "Hola!"

  if (idioma === 'aleman'){
    return "Guten Tag!";
  } else if (idioma === 'mandarin'){
    return "Ni Hao!";
  } else if (idioma === 'ingles'){
    return "Hello!";
  } else { 
    return "Hola!"
  }
}
 

describe('colors(color)', function() {
  it('should return \'This is {color}\'', function() {
    expect(colors("blue")).toBe('This is blue');
    expect(colors("red")).toBe('This is red');
    expect(colors("green")).toBe('This is green');
    expect(colors("orange")).toBe('This is orange');
  });
  it('should return \'Color not found\' if there is no argument or the argument is none of the expected ones', function() {
    expect(colors()).toBe('Color not found');
    expect(colors("pink")).toBe('Color not found');
  });
});

function colors (color){
  //la funcion recibe un color. Devuelve el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //en caso que el color recibido sea "red", devuelve --> "This is red"
  //en caso que el color recibido sea "green",devuelve --> "This is green"
  //en caso que el color recibido sea "orange", devuelve --> "This is orange"
  //caso default: devuelve --> "Color not found"

  switch (color){
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
      case "green":
        return "This is green";
      case "orange":
        return "This is orange";
      default:
        return "Color not found";
  }
}


describe('esDiezOCinco(num)', function() {
  it('should return true if num is 10 or 5', function() {
    expect(esDiezOCinco(10)).toBe(true);
    expect(esDiezOCinco(5)).toBe(true);
  });
  it('should return false if num is not 10 or 5', function() {
    expect(esDiezOCinco(11)).toBe(false);
    expect(esDiezOCinco(6)).toBe(false);
    expect(esDiezOCinco(0)).toBe(false);
    expect(esDiezOCinco(5.01)).toBe(false);
  });
});

function esDiezOCinco(num){
  //devuelve "true" si "numero" es 10 o 5
  //de lo contrario, devuelve "false"

  return num === 10 || num === 5;
}


describe('estaEnRango(num)', function() {
  it('should return true if num is inside range', function() {
    expect(estaEnRango(35.5)).toBe(true);
    expect(estaEnRango(40)).toBe(true);
    expect(estaEnRango(49)).toBe(true);
    expect(estaEnRango(21)).toBe(true);
  });
  it('should return false if outside of range', function() {
    expect(estaEnRango(10)).toBe(false);
    expect(estaEnRango(20)).toBe(false);
    expect(estaEnRango(50)).toBe(false);
    expect(estaEnRango(100)).toBe(false);
  });
});

function estaEnRango (num){
//devuelve "true" si num es menor a 50 y mayor a 20
//de lo contrario devuelve "false"
return numero < 50 && numero > 20;
}

describe('esEntero(num)', function() {
  it('should return true if num is 5', function() {
    expect(esEntero(5)).toBe(true);
  });
  it('should return false if num is 0.5', function() {
    expect(esEntero(0.5)).toBe(false);
  });
  it('should return true if num is -20', function() {
    expect(esEntero(-20)).toBe(true);
  });
  it('should return true for 0', function() {
    expect(esEntero(0)).toBe(true);
  });
});

function esEntero (num){
// Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  return numero % 1 === 0;
}

describe('fizzBuzz(num)', function() {
  it('should return fizz if divisible by 3', function() {
    expect(fizzBuzz(9)).toBe('fizz');
  });
  it('should return buzz if divisible by 5', function() {
    expect(fizzBuzz(10)).toBe('buzz');
  });
  it('should return fizzbuzz if divisible by 3 and 5', function() {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('should return num if not divisible by 3 or 5', function() {
    expect(fizzBuzz(4)).toBe(4);
  });
});

function fizzBuzz (num){
//si "num" es divisible por 3, devuelve "fizz"
//si "num" es divisible por 5, devuvelve "buzz"
//si "num" es divisible por 3 y por 5, devuelve "fizzbuzz"
//de lo contrario, devuelve el numero

if (num % 15 === 0) return "fizzbuzz";
if (num % 3 === 0) return "fizz";
if (num % 5 === 0) return "buzz";
return num;
}



describe('operadoresLogicos(num1, num2, num3)', function() {
  it('should return \'Número 1 es mayor y positivo\' if num1 is positive and if it is greater than num2 and num3', function() {
    expect(operadoresLogicos(50, 2, 15)).toBe('Número 1 es mayor y positivo');
  });
  it('should return \'Hay negativos\' if any of the arguments are negative', function() {
    expect(operadoresLogicos(80, -1, 2)).toBe('Hay negativos');
  });
  it('should return num3 + 1 if num3 is greater than num1 and num2', function() {
    expect(operadoresLogicos(1, 3, 10)).toBe(11);
  });
  it('should return \'Error\' if any of the arguments are equal 0', function() {
    expect(operadoresLogicos(1, 0, 10)).toBe('Error');
  });
  it('should return false if none of the conditions are met', function() {
    expect(operadoresLogicos(10, 30, 6)).toBe(false);
  });
});

function operadoresLogicos (num1, num2, num3){
//la funcion recibe tres numeros distintos
//si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//si no se cumplen ninguna de las condiciones anteriores, retornar false.

if (num1 < 0 || num2 < 0 || num3 < 0){
  return "Hay negativos";
} 
else if (num1 === 0 || num2 === 0 || num3 === 0){
  return "error";
}
else if (num1 > 0 && num1 > num2 && num1 > num3){
  return "Numero 1 es mayor y positivo";
}
else if (num3 > num1 && num3 > num2){
  return num3 + 1;
} else {
  return false;
}
}


describe('esPrimo(num)', function() {
  it('should return true if num is prime', function() {
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(97)).toBe(true);
    expect(esPrimo(11)).toBe(true);
  });
  it('should return false if num is not prime', function() {
    expect(esPrimo(9)).toBe(false);
    expect(esPrimo(4)).toBe(false);
    expect(esPrimo(10)).toBe(false);
    expect(esPrimo(100)).toBe(false);
    expect(esPrimo(0)).toBe(false);
    expect(esPrimo(1)).toBe(false);
  });
});


function esPrimo(num){
  //devuelve "true" si "num" es primo
  //de lo contrario, devuelve "false"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  if (num < 2) return false;
  if (num === 2) return true;
  for (var 1  = 2; i < num; i++){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

describe ('esVerdadero(valor)', function() {
  it('should return Soy verdadero if valor is true', function() {
    expect(esVerdadero(true)).toBe("Soy verdadero");
  });
  it('should return Soy falso if valor is false', function() {
    expect(esVerdadero(false)).toBe("Soy falso");
  });
});

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.

  if (valor === true){
    return "soy verdadero";
  }
    return "soy falso";
  }



describe ('tablaDelSeis()', function() {
  it('should return multiplication table of 6', function() {
    expect(tablaDelSeis()).toEqual([0 , 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
  });
});

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  let arrayTablaDel6 = []
  for (let i = 0; i < 11; i++){
    arrayTablaDel6.push (6 * i)
  }
  return arrayTablaDel6;
  }
}



describe ('tieneTresDigitos(numero)', function() {
  it('should return true if numero has 3 digits', function() {
    expect(tieneTresDigitos(100)).toBe(true);
    expect(tieneTresDigitos(820)).toBe(true);
    expect(tieneTresDigitos(900)).toBe(true);
    expect(tieneTresDigitos(10)).toBe(false);
    expect(tieneTresDigitos(20000)).toBe(false);
  });
});

function tieneTresDigitos(num){
  //leer un numero entero y determinar si tiene 3 digitos

  if (num > 99 && num < 1000){
    return true;
  }
  return false;
}



describe('doWhile(numero)', function() {
  it('should add 5 to number until reaching a limit of 8 times and return the sum value', function() {
    expect(doWhile(5)).toBe(45);
    expect(doWhile(100)).toBe(140);
    expect(doWhile(-1)).toBe(39);
  });
});

function doWhile (num){
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.

  var a = num;
  var i = 0;
  do {
    i = i + 1;
    a = a + 5;
  }
   while (i < 8);
    return a;
}