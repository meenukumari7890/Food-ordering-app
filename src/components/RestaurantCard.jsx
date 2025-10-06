import { CDN_URL } from "../common/constant";

const RestaurantCard = ({ res }) => {
  const imgId = res?.card?.card?.info?.cloudinaryImageId;
  //   const url= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imgId
  // const { resData} = props;
  console.log(res);
  return (
    <div className="res-card bg-gray-200 rounded-lg  p-4 hover:shadow-lg hover:bg-gray-300 transition duration-200 h-102 ">
      <img
        className="res-logo w-full h-40 object-cover    rounded-md mb-4"
        src={CDN_URL + imgId}
        alt="Restaurant"
      />

      <h3 className="text-lg font-semibold mb-1">
        {res?.card?.card?.info?.name}
      </h3>

      <h4 className="text-gray-500 text-sm mb-1">
        {res?.card?.card?.info?.cuisines.join(", ")}
      </h4>

      <h4 className="text-yellow-600 font-medium mb-1">
        ⭐ {res?.card?.card?.info?.avgRating}
      </h4>

      <h4 className="text-sm text-gray-700 mb-1">
        Cost for Two: {res?.card?.card?.info?.costForTwo}
      </h4>

      <h4 className="text-sm text-gray-700">
        {res?.card?.card?.info?.sla?.slaString}
      </h4>
    </div>
  );
};

// higher order component

// input - RestaurantCard =>RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2  rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
