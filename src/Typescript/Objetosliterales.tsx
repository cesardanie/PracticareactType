interface persona{
    nombrecompleto:string;
    edad:number;
    direccion:direccion
}//interface sirve para moldear mis objetos de una manera extricta
///Definicion del objeto principal
//////////////Deficion de Objeto secundario
interface direccion{
        pais:string;
        casano:number;
}
//////////////// interface solo sirven para poner restrcciones
export const Objetosliterales=()=>
{
    const persona:persona={
        nombrecompleto:'paula',
        edad:24,
        direccion:{
            pais:'Canada',
            casano:434,

        }
    }
    
    return(
        <>
        <hr/>
        <h3>Objetos literales</h3>
       {JSON.stringify(persona, null,2)}

        </>
    )

}