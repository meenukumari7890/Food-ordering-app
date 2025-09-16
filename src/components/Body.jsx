
import { Link } from "react-router";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
  const [searchText, setSearchText] = useState("");

   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  console.log("body render",listOfRestaurants)

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log("json->>>>>>>>>>>",json)

    const restaurantList = json?.data?.cards.slice(3); 
    // Adjust this depending on actual API response
    setListOfRestaurants(json?.data?.cards.slice(3));
    setFilteredRestaurant(json?.data?.cards.slice(3));
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Look like you're offline!! Please check your internet connection </h1>

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-6 py-6 max-w-7xl mx-auto">
      
  {/* Filter/Search Bar */}
  <div className="filter mb-6">
    <div className="search flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="text"
        className="search-box border border-gray-300 px-4 py-2 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
        placeholder="Search restaurants..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button
        onClick={() => {
          const filteredRestaurant = listOfRestaurants.filter((res) =>
            res?.card?.card?.info?.name
              ?.toLowerCase()
              .includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredRestaurant);
        }}
        className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
      >
        Search
      </button>

      <button
        className="filter-btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res?.card?.card?.info?.avgRating > 4.2
          );
          setFilteredRestaurant(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  </div>

  {/* Restaurants List */}
  <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {filteredRestaurant.map((res) => (
      <Link
        to={`/restaurents/${res.card.card.info.id}`}
        key={res.card.card.info.id}
        className="block"
      >
       {/* if the restaurant is promoted then add a promoted label */}
       {res.card.card.info.promoted ? (<RestaurantCardPromoted res={res} /> ) : (
         <RestaurantCard res={res} />
       )}
        
      </Link>
    ))}
  </div>
</div>


  );
};

export default Body;
