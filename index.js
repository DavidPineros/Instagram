function myOperation(){
    var value1 = document.getElementById("valor1").value
    var value2 = document.getElementById("valor2").value
    var operation = document.getElementById("operacion").value
    
    if(operation === "suma"){
        parseInt(res = value1 + value2)
        console.log("El resultado de la operacion es" + " " + res)
       }else if(operation === "resta"){
        res = value1 - value2
        console.log("El resultado de la operacion es " + res)
       }else if(operation === "multiplicar"){
        res = value1 * value2
        console.log("El resultado de la operacion es " + res)
       }else if(operation === "dividir"){
            res = value1 / value2
            console.log("El resultado de la operacion es " + res) 
       }else if(operation === "potencia"){
                res = value1 ** value2
                console.log("El resultado de la operacion es " +res)
       }else if(operation === "raiz cuadrada"){
        res = value1 % value2
        console.log("El resultado de la operacion es " + res)}
}  
    
var arrayexample = [1,2,3,4,5,6,7,8,9]

/* var multiplicacion = arrayexample.map(i => i * 10);
console.log(multiplicacion) */
 
function multiplicacionconarray (arrayexample){
    var multiplicacion = 0;
  for (var i = 0; i < arrayexample.length; i++){
     multiplicacion = 10 * [i];
  }
  return multiplicacion;
}
console.log(multiplicacionconarray)
