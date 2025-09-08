import { CDN_URL } from "../common/constant";

const RestaurantCard = ({res}) =>{
  
  const imgId = res?.card?.card?.info?.cloudinaryImageId
//   const url= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imgId
      // const { resData} = props;
      console.log(res);
      return(
            <div className="res-card">
                  <img className="res-logo"
                   src={CDN_URL+imgId}></img>
                  <h3>{res?.card?.card?.info?.name}</h3>
                  <h4>{res?.card?.card?.info?.cuisines.join(", ")}</h4>
                 <h4>Rating is {res?.card?.card?.info?.avgRating}</h4> 
                 <h4>Cost of Two : {res?.card?.card?.info?.costForTwo}</h4>   
                   <h4>{res?.card?.card?.info?.sla?.slaString}</h4>  


            </div>
      )
}
export default RestaurantCard;