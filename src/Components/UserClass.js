import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        // console.log(props);

        this.state={
            Count : 0,
            // count2 : 1,
            UserInfo :{
                name: "Dummy",
                location : "Default",
                avatar_url : "Dummy Image"
            }
        }

        // console.log(this.props.name+"Constructor Called")
    }

    async componentDidMount(){
        // console.log(this.props.name +"componentDidMount called")

        const data = await fetch("https://api.github.com/users/PriyAsh-24");

        const json= await data.json();

        // console.log(json);

        this.setState({
            UserInfo : json,
        });
    }

    render(){

        // const {name,location}=this.props;
        // console.log(this.props.name+"render Called")

        const { name,location,avatar_url }=this.state.UserInfo;

        return(
            <div>
                <h1>Count : {this.state.Count}</h1>
                    {/* <h1>Count2 : {this.state.count2}</h1> */}
                    <button onClick={()=>{
                        // this.state.Count=this.state.Count+1;
                        // * Never use state Variables Directly

                        this.setState({
                            Count: this.state.Count +1,
                        });
                    }}>Count Increase</button>
                <div className="user-card">
                    <img src={avatar_url}></img>
                    <h2>Name : {name}</h2>
                    <h3>Location : {location}</h3>
                    <h4>Contact : @priyash</h4>
                </div>
            </div>
        );
    }
}

export default UserClass 