
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Menu from "./Menu";
import { data, useParams } from "react-router";

const RestaurantMenu = () => {
  const params = useParams()
  console.log("params->>>>>>",params)
  const id = params.resId;
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=${id}&query=Biryani&submitAction=ENTER&source=collection`
      );
      const json = await data.json();
      setResInfo(json?.data?.cards?.slice(2)); // Save the fetched data to state
      
      console.log("json.data.cards.slice(2)",json.data); // Logging fetched JSON
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  // Safely access the restaurant info
  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
  const name = restaurantInfo?.name;
  const cuisines = restaurantInfo?.cuisines;
  const costForTwoMessage = restaurantInfo?.costForTwoMessage;

  // = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.card[1]?.card;

  return resInfo === null ? (
<h1>Menu Loading......</h1>    
  ) : (<>
  <h1 className="id2">{resInfo?.[0]?.card?.card?.info?.name}</h1>
  
  <h1 className="id">Menu</h1>
{resInfo[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((card)=>{return card?.card?.card?.itemCards?.map((menu)=>{
        console.log("resInfo->>>>>>>>>>>>>>>>>>>>>>>>>>>>>",resInfo)
        return < Menu menuData={menu} key={menu.card.info.id}/>})})}
       
  </>);
  
};

export default RestaurantMenu;
