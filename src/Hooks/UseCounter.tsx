import { useState } from "react";
export const Usecounter=(inicial:number=10)=>
{
    const[valor,setvalor]=useState(inicial);
    const acumular=(numero:number)=>{
        setvalor(valor+numero);
    }
    return{
        valor,
        acumular
    }
}