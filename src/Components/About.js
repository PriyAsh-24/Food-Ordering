import { Component } from "react"
import UserClass from "./UserClass"
import UserFunction from "./UserFunction"
import UserContext from "../Utils/userContext";

// export const About=()=>{
//     return (
//         <div className="About">
//             <h1>ABout us</h1>
//             <h2>hello hello hello ab kyaa he batau isske baare mai</h2>
//             <UserFunction name={"Priyash (Function)"} />

//             <UserClass name={"Priyash (class)"} location={"Bhopal"} />
//         </div>
//     )
// }

class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor Called")
    }

    componentDidMount(){
        // console.log("Parent componentDidMount called")
    }

    render(){
        // console.log("Parent Render Called")
        return(
            <div className="About">
                <h1>ABout us</h1>
                <h2>hello hello hello ab kyaa he batau isske baare mai</h2>
                {/* <UserFunction name={"Priyash (Function)"} /> */}

                <UserClass name={"Priyash (class)"} location={"Bhopal"} />
                {/* <UserClass name={"Elon"} location={"US"} /> */}
                <div>
                  LoggedInUser :
                    <UserContext.Consumer>
                        {({LoggedInUser}) => <h1 className="font-bold">{LoggedInUser}</h1>}
                    </UserContext.Consumer>  
                </div>
            </div>
        );
    };
}

export default About

// export default About