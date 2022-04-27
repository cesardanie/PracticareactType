export const Funciones=()=>
{
    const sumar=(a:number,b:number):number=>
    {
        return a+b;
    }
    return(
        <>
        <br/>
        <h4>Funciones</h4>
        <span>El resultado es ={sumar(1,2)}</span>
        </>
    )
}