import { useRouteError } from "react-router-dom"

export const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOOPS....!!!!!</h1>
            <h2>Something Went Wrong!!!</h2>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}
