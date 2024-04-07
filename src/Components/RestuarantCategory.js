import { useState } from "react";
import ItemList from "./ItemList";

const RestuarantCategory=({data , showItems , setshowIndex}) =>{
    // console.log(data);

    // const [showItems,setShowItems]=useState(false);

    const handleclick=()=>{
        // setShowItems(!showItems);
        setshowIndex();

        
    }
    return (
        <div>
            <div  className="w-6/12 mx-auto bg-slate-200 p-3 m-4 shadow-lg " >
                <div className="flex justify-between cursor-pointer font-bold" onClick={handleclick}>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                <div>
                    {showItems && <ItemList items={data.itemCards}/>}
                </div>
            </div>
        </div>
    )
}

export default RestuarantCategory