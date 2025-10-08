import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>

       <div className="w-6/12 m-auto">
      <button
        className="bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-600 mb-4"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 ? (
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
      ) : (
        <h2 className="text-xl font-semibold mb-4">Items in your cart:</h2>
      )}

      <ItemList items={cartItems} />
    </div>
    </div>
  );};
export default Cart;
