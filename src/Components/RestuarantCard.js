import { IMAGE_URL } from "../Utils/constants";



const RestuarantCard= (props) => {
    const {resdata} = props;
    // console.log(resdata);

    const { cloudinaryImageId,name,costForTwo,cuisines,avgRating}= resdata?.info;  //isse merko baar baar res.data nahi likhna padega 
    return(
        <div data-testid="resCard" className="res-card w-[300px] m-2 p-2 h-[550px] shadow-xl rounded-md flex flex-col bg-slate-100 hover:bg-gray-200" >
            <img className="Image rounded-lg h-[300px]" alt="Ladoo Image" src={ IMAGE_URL + resdata.info.cloudinaryImageId}></img>
            <h3  className="font-bold m-1 p-2 ">{name}</h3>
            <h4  className=" p-2 ">{costForTwo}</h4>
            <h4  className=" p-2 ">{cuisines.join(", ")}</h4>
            <h4  className=" p-2 ">{avgRating} stars</h4>
        </div>
    )
}

//Higher Order Component

// input - Restuarant => Resturant Card Promoted

export const withPromotedLabel = (RestuarantCard) =>{
    return (props)=>{
        return (
            <div>
                <label>Promoted</label>
                <RestuarantCard {...props}/>
            </div>
        );
    }
}

export  default RestuarantCard; 