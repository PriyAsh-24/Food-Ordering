import ItemList from "./ItemList"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { clearCart } from "../Utils/cartSlice"

const Cart =()=>{
    const cartItems= useSelector((store) => store.cart.items)

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return (<div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold ">Cart</h1>

        <div className="w-6/12 m-auto">
            <div>
                <button className="p-2 m-2 bg-neutral-500 text-white rounded-lg" onClick={handleClearCart} >Clear Cart</button>
            </div>
            {cartItems.length===0 && <h1>Cart is empty!! Do more Shopping</h1>}
            <ItemList items={cartItems} />
        </div>
    </div>)
}

export default Cart