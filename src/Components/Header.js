import { useContext, useEffect, useState } from "react";
import { LOGO_URL, NEW_IMAGE_URL } from "../Utils/constants";
import LOGO_IMAGE_URL from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
// import { NEW_IMAGE_URL } from "../Utils/constants";
import UserContext from "../Utils/userContext";
import {useSelector} from "react-redux"

const Header= () => {
    const [btnlogin,setbtnlogin]=useState("Login");
    // console.log(Header);

    // when there is no dependency array => every time header is render it will be called
    // when there is empty dependency array => it is called on initial render(just once)
    // if dependency array is [btnLogin] => called everytime [btnLogin] is updated
    useEffect(()=>{
        // console.log("Use Effect Called ");
    },[btnlogin])

    const onlineStatus=useOnlineStatus();

    const data=useContext(UserContext);
    // console.log(data);

    //Subscribing to the store using selector
    const cartItems=useSelector((store) => store.cart.items);
    // console.log(cartItems);
    

    return (
        <div className="flex justify-between items-center p-5 bg-pink-50 m-3 shadow-lg">
            <div className="w-36 ">
                {/* <a href={LOGO_URL}><img src={LOGO_IMAGE_URL} width="192" height="120" /></a> */}
                <img src={NEW_IMAGE_URL} alt="canva-Swiggy" border="0" height={150}></img>
            </div>
            <div className="Nav-bar">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4 py-1">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4 py-1 hover:bg-pink-200 rounded-sm"  ><Link to="/">Home</Link></li>
                    <li className="px-4 py-1 hover:bg-pink-200 rounded-sm"><Link to="/about">About us</Link></li>
                    <li className="px-4 py-1 hover:bg-pink-200 rounded-sm" ><Link to="/contact">Contact us</Link></li>
                    <li className="px-4 py-1  hover:text-lime-400"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 py-1 hover:bg-pink-200 rounded-sm font-bold"><Link to="/cart">🛒({cartItems.length})</Link></li>
                    <button className="Login px-4 border-2 border-pink-200 py-1" onClick={() =>{
                        btnlogin ==='Login' ?setbtnlogin('Logout') : setbtnlogin('Login');
                    }}>{btnlogin}</button>

                    <li className="px-4 py-1 ">{data.LoggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;