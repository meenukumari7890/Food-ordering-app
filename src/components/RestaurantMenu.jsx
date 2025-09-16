
// import React, { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import Menu from "./Menu";
// import { data, useParams } from "react-router";
// import RestaurantCategory from "./RestaurantCategory";

// const RestaurantMenu = () => {
//   const params = useParams()
//   console.log("params->>>>>>",params)
//   const id = params.resId;
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=${id}&query=Biryani&submitAction=ENTER&source=collection`
//       );
//       const json = await data.json();
//       setResInfo(json?.data?.cards?.slice(2)); // Save the fetched data to state
      
//       console.log("json.data.cards.slice(2)",json.data); // Logging fetched JSON
//     } catch (error) {
//       console.error("Failed to fetch menu:", error);
//     }
//   };

//   // Safely access the restaurant info
//   const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
//   const name = restaurantInfo?.name;
//   const cuisines = restaurantInfo?.cuisines;
//   const costForTwoMessage = restaurantInfo?.costForTwoMessage;

//   // = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.card[1]?.card;

//   return resInfo === null ? (
//   <h1 className="text-left text-2xl font-semibold mt-10 ml-4">
//     Menu Loading......
//   </h1>
// ) : (
//   <>
//     <h1 className="text-center text-3xl font-bold text-gray-800 mb-6 p-5" >
//       {resInfo?.[0]?.card?.card?.info?.name}
//     </h1>

//     <h2 className="text-center  font-semibold text-gray-1000 mb-5  pb-2 text-2xl">
//       Menu
//     </h2>

//     <div 
//     className="flex flex-col items-center space-y-9"
//     >
//       {resInfo[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((card) =>
//         card?.card?.card?.itemCards?.map((menu) => {
//           console.log("resInfo->>>>>>>>>>>>>>>>>>>>>>>>>>>>>", resInfo);
//           const categories = resInfo[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel");
//                 {categories.map((category) => <RestaurantCategory/>)} 

//           console.log(categories)
//           return <Menu menuData={menu} key={menu.card.info.id} />;
//         })
//       )}
//       {/* categories accordions */}
//     </div>
//   </>
// );

// };

// export default RestaurantMenu;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; // ✅ Only use useParams, not data
import Shimmer from "./Shimmer";
import Menu from "./Menu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams(); // ✅ Destructure resId directly
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=${resId}&query=Biryani&submitAction=ENTER&source=collection`
      );
      const json = await response.json();

      // ✅ Optional: You may need to adjust this based on Swiggy API structure
      setResInfo(json?.data); // Save the full data instead of slicing
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  // ✅ Show loading text while fetching
  if (!resInfo) {
    return (
      <h1 className="text-left text-2xl font-semibold mt-10 ml-4">
        Menu Loading......
      </h1>
    );
  }

  // ✅ Extract restaurant info from the proper card
  const restaurantInfo = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  const name = restaurantInfo?.name;
  const cuisines = restaurantInfo?.cuisines?.join(", ");
  const costForTwoMessage = restaurantInfo?.costForTwoMessage;

  // ✅ Extract menu sections (REGULAR)
  const regularCards = resInfo?.cards?.find(
    (card) => card?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;


  // ✅ Filter categories with menu items
  const categories = regularCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <>
      {/* Header Info */}
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-4 p-5">
        {name}
      </h1>
      <h3 className="text-center text-xl font-bold text-gray-600">{cuisines}- {costForTwoMessage}</h3>


      {/* Menu Items & Categories */}
      <div className="flex flex-col items-center space-y-6 px-4">
        {/* ✅ Loop through categories and render each */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
