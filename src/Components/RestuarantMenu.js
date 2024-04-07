import { useState } from "react"
import Shimmer from "./Shimmer";
import { MENU_ID } from "../Utils/constants";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../Utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";

const RestuarantMenu=() =>{

    // const [resInfo,setresInfo]=useState(null);
    const {resId}=useParams();

    const resInfo=useRestuarantMenu(resId);

    const [showIndex, setShowIndex]=useState(0);

    // useEffect(()=>{
    //     useFetch();
    // },[])

    // const useFetch=async () => {
    //     const data= await fetch(MENU_ID + resId);
    //     const json=await data.json();

    //     // console.log(json);

    //     setresInfo(json.data);
    // }

    if(resInfo===null) return <Shimmer/> ;
    // console.log(resInfo);

    const { name,cuisines,costForTwoMessage }= resInfo?.cards[2]?.card?.card?.info; 

    const { itemCards }= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories);
    // console.log(useState());

    return (
        <div className="text-center">
            <h1 className="my-5 font-bold  text-3xl">{name}</h1>
            <p className="font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>

            {categories.map((category,index)=> (
                <RestuarantCategory key={category.card.card.title} 
                    data={category.card?.card} 
                    showItems={index===showIndex ? true :false} 
                    setshowIndex={()=>setShowIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestuarantMenu