import RestuarantCard,{withPromotedLabel} from "./RestuarantCard";
import resList from "../Utils/mockData";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatuts from "../Utils/useOnlineStatus";
import UserContext from "../Utils/userContext";

const Body = () => {

    //State Variable - Super Powerful Variable
    // let [ListOfRestuarant ,setListOfRestuarant] = useState([
    //     {
    //     "info": {
    //       "id": "106673",
    //       "name": "Bhopal Udipi Restaurant",
    //       "cloudinaryImageId": "zjvbljmeakcsffkky6hp",
    //       "costForTwo": "₹250 for two",
    //       "cuisines": [
    //         "South Indian",
    //         "North Indian",
    //         "Chinese",
    //         "Fast Food",
    //         "Street Food"
    //       ],
    //       "avgRating": 4.1,
    //     }
    //     },
    //     {
    //         "info": {
    //         "id": "106674",
    //         "name": "KFC",
    //         "cloudinaryImageId": "zjvbljmeakcsffkky6hp",
    //         "costForTwo": "₹250 for two",
    //         "cuisines": [
    //             "South Indian",
    //             "North Indian",
    //             "Chinese",
    //             "Fast Food",
    //             "Street Food"
    //         ],
    //         "avgRating": 3.1,
    //         }
    //     } ,
    //     {
    //         "info": {
    //         "id": "106675",
    //         "name": "Sagar Gaire",
    //         "cloudinaryImageId": "zjvbljmeakcsffkky6hp",
    //         "costForTwo": "₹250 for two",
    //         "cuisines": [
    //             "South Indian",
    //             "North Indian",
    //             "Chinese",
    //             "Fast Food",
    //             "Street Food"
    //         ],
    //         "avgRating": 4,
    //         }
    //     }]);

    // to pass the whole data now 
    let [ListOfRestuarant ,setListOfRestuarant]=useState([]);  //Earlier we were using our mock data over here 
    let [filteredList,setfilteredList]=useState([]);

    const [searchText,setsearchText]=useState('');

    const RestuarantCardPromoted=withPromotedLabel(RestuarantCard);

    //Whenever state variable changes ,react triggers a reconciliation (dont say virtual dom) cycle (re-renders the component )
    // console.log("BODY RENDERED")


    // useEffect(() =>{                      // *it is called when the render took place
    //   console.log("Use Effect Called");  
    // },[]);
    
    // console.log("Body Rendered") ;         // use this example to see when console is printed

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json=await data.json();

      // console.log(json);

      setListOfRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    //Normal Js Variable
    let ListOfRestuarant2=[
        {
            "info": {
              "id": "106673",
              "name": "Bhopal Udipi Restaurant",
              "cloudinaryImageId": "zjvbljmeakcsffkky6hp",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese",
                "Fast Food",
                "Street Food"
              ],
              "avgRating": 4.1,
            }
          },
        {
            "info": {
              "id": "106674",
              "name": "KFC",
              "cloudinaryImageId": "zjvbljmeakcsffkky6hp",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese",
                "Fast Food",
                "Street Food"
              ],
              "avgRating": 3.1,
            }
        } ,
        {
            "info": {
              "id": "106675",
              "name": "Sagar Gaire",
              "cloudinaryImageId": "zjvbljmeakcsffkky6hp",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese",
                "Fast Food",
                "Street Food"
              ],
              "avgRating": 4,
            }
        }
    ];

    const onlineStatus=useOnlineStatuts();

    if(onlineStatus===false) return <h1>Looks like your Offline!! Check your Internet Connection</h1>

    //Conditional rendering
    if(ListOfRestuarant.length===0){
      return <Shimmer />
    }

    const {setUserName,LoggedInUser}=useContext(UserContext);

    const style={
      backgroundColor : "#E0E0E0"
  }

  // console.log(filteredList);



    return (
        <div className="Body" >
            <div className="Filter flex m-3">
              <div className="search ">
              <input data-testid="searchInput" type="text" className="search-box border-2" value={searchText} onChange={(e)=>{
                setsearchText(e.target.value);     {/* NOW EACH AND EVERY KEY WE TYPE WILL REFRESH OR RENDER OUR PAGE AGAIN AND AGAIN*/ }
              }}></input>  {/* if we only write value={searchText} and no writing any onchange we are saying that value is searchText and searchText is empty so value cannot have any thing */}
              <button className="bg-green-100 px-6 py-1 rounded-lg" onClick={() => {
                console.log(searchText);
                const filteredList=ListOfRestuarant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                setfilteredList(filteredList);
              }}>Search</button>
              </div>
              <button data-textid="FilterBtn" className="bg-green-200 px-4 mx-2 rounded-lg"  onClick={() => {

                const Filteredlist1= ListOfRestuarant.filter((res)=> res.info.avgRating>4) 
                // console.log(Filteredlist1);
                setfilteredList(Filteredlist1);

                //* This is a normal js way of updating 
                // ListOfRestuarant= ListOfRestuarant.filter((res)=> res.info.avgRating>4) 
                // console.log(ListOfRestuarant);
              }}>Filter Top Restuarants</button>
              <div>
                <label>User Name </label>
                <input className="my-1 p-1 border border-black " value={LoggedInUser} onChange={(e)=> setUserName(e.target.value)}></input>
              </div>
            </div>
            <div className="res-container flex flex-wrap " >
                {filteredList.map((restuarent, index ) => {
                    return <Link key={restuarent.info.id} to={"restuarants/" + restuarent.info.id }>
                      {restuarent.info.Promoted ? (<RestuarantCardPromoted resdata={restuarent} />) 
                      :
                      (<RestuarantCard  resdata={restuarent} />)}</Link>  //Always add a Key why is in readme 
                })}
            </div>
        </div>
    );

}

export default Body;