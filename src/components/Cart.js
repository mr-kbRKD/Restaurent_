import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./Utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <>
            <h1 className="text-3xl font-bold">Cart Items - {cartItems.length}</h1>
            <button type="button" className="p-2 m-5 bg-green-200" onClick={() => handleClearCart()}>Clear Cart</button>
        </>
    )
}

export default Cart;