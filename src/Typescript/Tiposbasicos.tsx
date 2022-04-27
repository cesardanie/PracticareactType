export const Tiposbasicos=()=>
{
    let nombre:string='Fernando';//puedo ponerle dos tipos a la variable numero o string tuberias
    const edad=35//constante nunca cambiara
    let poderes=['volar','super velocidad','vision nocturna'];
    return(
        <>
        <hr/>
        <h3>Tipos basicos</h3>
        {nombre} , {edad}
        <br/>
        {poderes.join(',')}

        </>
    )

}