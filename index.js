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
    
