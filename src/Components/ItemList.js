import { IMAGE_URL } from "../Utils/constants"
import {useDispatch} from "react-redux"
import { addItem } from "../Utils/cartSlice";

const ItemList=({items})=>{
    // console.log(items)
    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        //dispatch an action
        dispatch(addItem(item));
    };

    return (<div>
        {items.map((item)=>(
            <div data-testid="foodItems"  key={item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                
                <div className="w-9/12">
                    <div className="text-lg p-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price /100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12">
                    <div className="absolute">
                        <button className="bg-gray-100 p-2 mx-15 rounded-lg shadow-lg" onClick={() => handleAddItem(item)}>Add+</button>
                    </div>
                    <img src={IMAGE_URL + item.card.info.imageId} className="p-4"/>
                </div>
            </div>
        ))}
    </div>)
}

export default ItemList