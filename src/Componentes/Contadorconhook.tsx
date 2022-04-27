import { useState } from "react";
import { Usecounter } from "../Hooks/UseCounter";
export const Contadorconhook=()=>
{
    const {valor, acumular}=Usecounter();//investigar como funciona el useconter
   return(
       <>
       <h3>Contador<small>{valor}</small></h3>
       <button className="btn btn-primary"
       onClick={()=>acumular(1)}>+1</button>
       &nbsp;
       <button className="btn btn-primary"
       onClick={()=>acumular(-1)}>-1</button>
       
       </>
   )
}