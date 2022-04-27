import { useEffect, useReducer } from "react";
interface AuthSate{
    validando:boolean,
    token: string |null,
    username:string,
    nombre:string,
}

const initialstate:AuthSate={
    validando:true, 
    token:null,
    username:'',
    nombre:''
}

type loginPayload={
    username:string;
    nombre:string;
}


type Authaction=
|{ type:'logout'}
|{type:'Logint',payload:loginPayload};

const authReducer=(state:AuthSate,action:Authaction):AuthSate=>
{
    switch(action.type)
    {
        case 'logout':
           
            return{
                validando:false,
                token:null,
                username:'Paulaz',
                nombre:'Paula',
            }
        case 'Logint':
           const {nombre,username}=action.payload
            return{
                validando:false,
                token:'ewyre',
                nombre,
                username

            }
            break;
          default:
              return state;

    }


}

//dos argumentos un estado y una accion
export const Login=()=>
{
    const[state,dispatch]=useReducer(authReducer,initialstate)
    useEffect(()=>{
        setTimeout(() => {
            dispatch({type:'logout'})
        }, 1500);
    },[]);

    const login=()=>{
        dispatch({ type:'Logint',payload:{
            nombre:'Fernando',
            username:'Strider'
        }})
    }
const logout=()=>
{
 dispatch({type:'logout'});
}


    if(state.validando)
    {
        return(
            <>
            <h3>Login</h3>
            <div className="alert alert-info">Validando</div>
            </>
        )
    }
    return(
        <>
        <h3>Login</h3>
        {
            (state.token)
            ?
            <div className="alert alert-success">
            autenticado como:{state.nombre}
            </div>
            :<div className="alert alert-danger">
            No autenticado
            </div>

        }
        {
            (state.token)
            ?(
                <button className="btn btn-danger"
                onClick={logout}>
                    Logout
                </button>
            ):
            (
                <button className="btn btn-primary"
                onClick={login}>
                    Login
                </button>
            )
        }
        <div className="alert alert-info">
        valiando.....
        </div>
        

        
        <button className="btn btn-primary">Login</button>
        <button className="btn btn-danger">Logout</button>


        </>
    )
}