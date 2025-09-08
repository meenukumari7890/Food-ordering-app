import { useEffect, useState } from "react"

const useRestaurantMenu = (resId) =>{
    // fetch the data

    const [resInfo, setResInfo]= useState(null);

 useEffect(() =>{
    fetchData();
 }, []);
 
 const fetchData = async () =>{
    const data = await fetch(
       `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=${id}&query=Biryani&submitAction=ENTER&source=collection`
      );
      const json = await data.json();
      setResInfo(json,cards);
 }

    return  resInfo;
}
export default useRestaurantMenu;