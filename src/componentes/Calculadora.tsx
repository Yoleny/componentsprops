import React from 'react'
import { Parametros } from '../modelos/Parametros';


/** 
 * 
 * SUma
 * Resta
 * multiplizacion
 * Factorial de un numero
*/
function Suma(a: number,b:number){
    return a+b;
}
function Resta(a: number,b:number){
    return a-b;
}
function Multiplizacion(a: number,b:number){
    return a*b;
}
function Factorial(n: number): number {
    if (n < 0) {
        throw new Error("");
    } else if (n === 0 || n === 1) {
        return 1; 
    } else {
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}


function Calculadora(props:Parametros) {
  return (
    <div style={{ textAlign: 'center' }}>
    Suma de los valores es {Suma(props.a, props.b)}
    <br/>
    La resta de los valores es {Resta(props.a, props.b)}
    <br/>
    La multiplicación de los valores es {Multiplizacion(props.a, props.b)}
    <br/>
    El factorial de {props.a} es {Factorial(props.a)}
    </div>
  )
}

export default Calculadora
