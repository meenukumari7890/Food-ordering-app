import { CDN_URL } from "../common/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action to add item to cart
    dispatch(addItem(item));
    console.log("Item added to cart:", item);
  };
  return (
    <div >
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          {/* Text Content (left) */}
          <div className="w-9/12">
            <div className="py-2">
              <h3 className="text-base font-bold text-gray-800">
                {item.card.info.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {item.card.info.description || "No description available."}
              </p>
            </div>
            <div className="text-sm text-gray-700 font-medium mt-2">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
          </div>

          <div className="flex flex-col items-center w-36 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="absolute">
              <button
                className="p-2 bg-black text-white shadow-lg rounded-lg mx-5 w-15 text-sm  mt-24 h-10"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
