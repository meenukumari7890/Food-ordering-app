

import { CDN_URL } from "../common/constant";

const ItemList = ({ items }) => {
  return (
    <div className="  w-220">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex gap-4 p-4 border-b border-gray-900 bg-white rounded-md shadow-s hover:shadow-md "
        >
          {/* Text Content (left) */}
          <div className=" flex flex-col justify-between flex-grow ">
            <div>
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
           
           {/* <div className="flex flex-col items-center w-40"> */}
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-32 object-cover rounded-md"
            />  
             <div className="absolute">
            <button
              className="p-2 bg-black text-white shadow-lg rounded-lg mx-5 w-15 text-sm  mt-24 h-10"
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
