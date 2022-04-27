import { useEffect, useRef } from "react"
import { ResqRespon } from "../api/ResqRespon";
import {Reqresponselistado, Usuario} from "../Interface/Reqresponselistado"
import { useState } from "react";

///forma de exportar con ayuda de interface muy util 
export const Usuarios=()=>
{   const[usuarios,setusuarios]=useState<Usuario[]>([]);

    const paginaref= useRef(0);

    useEffect(()=>{
       cargarusuarios();
    },[])

//dentro del useeefctt se pone interface por la cantidad de cosas que trae el axios
const renderItem=(usuario:Usuario)=>
{
    return(
            <tr key={usuario.id.toString()}>
                <td><img src={usuario.avatar}/></td>
                <td>{usuario.first_name}</td>
                <td>{usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
    )
}
const cargarusuarios=async()=>
{
    ///lamado a la api
    const resp= await ResqRespon.get<Reqresponselistado>('/users',{
        params:{
            page:paginaref.current
        }
    }).then(resp=>{
    
    if(resp.data.data.length>0)
    {
        setusuarios(resp.data.data)
        paginaref.current ++;
    }
    else{
        paginaref.current=0;
        alert('No hay mas registros');
    }
    
    }).catch(err=>console.log(err))
}

    return(
    <>
    <h3>Usuarios</h3>
    <table className="table">
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>email</th>
            </tr>

        </thead>
        <tbody>
            {
                usuarios.map((usuario:Usuario)=>renderItem(usuario))
            }

        </tbody>
    </table>
    <button className="btn btn-primary" onClick={cargarusuarios}>
        Siguiente
    </button>
    </>
)
}