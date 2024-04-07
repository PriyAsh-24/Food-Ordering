import { useState } from "react";

const UserFunction=(props)=>{

    const [Count]=useState(0); 
    const [Count2]=useState(1); 

    return(
        <div>
            <div className="user-card">
                <h1>COunt : {Count}</h1>
                <h1>COunt2 : {Count2}</h1>
                <h2>Name : {props.name}</h2>
                <h3>Location : Bhopal</h3>
                <h4>Contact : @priyash</h4>
            </div>
        </div>
    );
}

export default UserFunction