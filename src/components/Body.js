import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState} from "react";



const Body = () =>{
// local state variable  - super powerful variable

const [listOfRestaurants, setListOfRestraunt] = useState([]);

const [searchText,setSearchText ] = useState("");
console.log("listOfRestaurants",listOfRestaurants)

useEffect(() => {
      fetchData();
}, []);

const fetchData = async () =>{
      const data = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

      const json = await data.json();
      console.log("json",json);
      // optional chaining
      setListOfRestraunt(json?.data?.cards.slice(3));
};

// conditional rending 
// if(listOfRestaurants.length === 0){
//       return <Shimmer/>
// }

//   const resData=resObj.slice(3);
      return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
            <div className="body">
                <div className="filter">
                  <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e) =>{
                          setSearchText(e.target.value);
                        }}/>
                        <button onClick={()=>{
                        //filter the   restarunt cards and  update the ui
                        //search text 
                        
                      const filteredRestaurant =  listOfRestaurants.filter((res)=> res?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                                    console.log("filteredRestaurant",filteredRestaurant)
                      setListOfRestraunt(filteredRestaurant);
                        }}

                        >Search</button>
                           <button className="filter-btn" onClick={() =>{
                        // filter logical here
             const filteredList = listOfRestaurants.filter((res) => res?.card?.card?.info?.avgRating>4);
                   setListOfRestraunt(filteredList);
                    }}>
                        Top Rated Restaurant  </button>
                  </div>
                 
                </div>
               

                    <div className="res-container">
                        {listOfRestaurants.map((res,index) => {return <RestaurantCard key={index} res={res}/>})  }  
                                        
                                         {/* resdata is comeing to listofresturants */}
                                         
                        {/* <RestaurantCard resName="KFC"
                         cuisine="crispy fillet burger  seasoned chicken breast" /> */}
                    </div>
            </div>
      )
}
export default Body;

//setListOfRestraunt update the