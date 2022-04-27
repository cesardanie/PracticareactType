import React from "react";
import { Tiposbasicos } from "./Typescript/Tiposbasicos";
import { Objetosliterales } from "./Typescript/Objetosliterales";
import { Funciones } from "./Typescript/Funciones";
import { Contador } from "./Componentes/Contador";
import { Contadorconhook } from "./Componentes/Contadorconhook";
import { Login } from "./Componentes/Login";
import { Usuarios } from "./Componentes/Usuarios";
 
const App=()=>
{
  return(
    <div className="mt-2">
        <h1>Introduccion a react type</h1>
        <Tiposbasicos/>
        <Objetosliterales/>
        <Funciones/>
        <Contador/>
        <Login/>
        <br/>
        <br/>
        <Usuarios/>
    </div>

  )

}

export default App;