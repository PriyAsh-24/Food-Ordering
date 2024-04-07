import { useEffect, useState } from "react"
import { MENU_ID } from "./constants";

const useRestuarantMenu=(resId) => {
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata=async ()=>{
        const data= await fetch(MENU_ID + resId);
        const json= await data.json();

        // console.log(json.data);

        setResInfo(json.data);

    }

    return resInfo;
}

export default useRestuarantMenu