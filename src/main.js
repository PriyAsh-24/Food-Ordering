import React, { lazy,Suspense, useEffect, useState } from "react"
import ReactDOM from  'react-dom/client'
import Header from "./Components/Header"
import Body from "./Components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import About from "./Components/About"
import { ContactUs } from "./Components/ContactUs"
import {Error} from "./Components/Error"
import RestuarantMenu from "./Components/RestuarantMenu"
import UserContext from "./Utils/userContext"
import { Provider } from "react-redux"
import appStore from "./Utils/appStore"
import Cart from "./Components/Cart"

// import Grocery from "./Components/Grocery"

const Grocery= lazy(()=>import("./Components/Grocery"))

/*
 Header
 - logo
 - nav-items
 Body
 -search
 -Resuarent Card
    -Restuarant card
    -img 
    -name,star rating ,cuisine,dilivery time
 Footer
 - Copyright
 - Links
 - Address
 - Contact
*/


const AppLayout= () => {
    const [userName,setUserName]=useState();

    //Autentication
    useEffect(()=>{
        //make Api call
        const data={
            name : "Priyash Sharma"
        }

        setUserName(data.name);
    },[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{LoggedInUser : userName , setUserName}}>
            <div  className="body">
                <Header/>
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    )
}

//Routing 
const appRouting=createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,

        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <ContactUs />
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
            },
            {
                path : "/restuarants/:resId",
                element: <RestuarantMenu />
            },
            {
                path : "/cart",
                element: <Cart />
            },
        ],

        errorElement : <Error />
    }
]);

const root=ReactDOM.createRoot(document.getElementById(("Root")));

root.render(<RouterProvider router={appRouting} />)