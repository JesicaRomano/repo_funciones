//Registrese con su usuario y contraseña para utilizar la calculadora:
let usuario = "admin";
let contraseña = "pass123";
usuario = prompt("Ingrese su nombre de usuario");
contraseña = prompt("Ingrese su contraseña");

while(usuario !== "admin"  || contraseña !== "pass123"){
    alert("Contraseñas inválidas, no puede acceder a la calculadora");
    break;
}

//Calculadora del interes que otorga un plazo fijo
function plazoFijo(monto, plazo){
    if((monto >30000 && monto <=50000) || (plazo >= 30 && plazo < 60 )){
        return monto*(Math.pow(1+(30/100), plazo/360)-1);
    }else if((monto >50000 && monto <=80000) || (plazo >= 60 && plazo < 90 )){
        return monto*(Math.pow(1+(35/100), plazo/360)-1);
    }
    else if((monto >80000 && monto <=100000) || (plazo >= 90 && plazo < 180 )){
        return monto*(Math.pow(1+(40/100), plazo/360)-1);
    }
    else if((monto >100000 && monto <=150000) || (plazo >= 180 && plazo < 360 )){
        return monto*(Math.pow(1+(45/100), plazo/360)-1);
    }
    else{
        return monto*(Math.pow(1+(50/100), plazo/360)-1);
    }
}
console.log(plazoFijo(35000, 50));
console.log(plazoFijo(35000, 100));
console.log(plazoFijo(85000, 50));
console.log(plazoFijo(35000, 180));
console.log(plazoFijo(100000, 50));
console.log(plazoFijo(150000, 90));
console.log(plazoFijo(35000, 361));
console.log(plazoFijo(180000, 300));


