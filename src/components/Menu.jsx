
const Menu = (props) =>{
    const {name,description,price,imageId,isVeg}=props.menuData.card.info;

    const imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+ imageId;
    return(
//         <div className="menu">
//   <div className="menu-details">

//     {
//         isVeg==1?<img
//       className="veg-icon"
//       src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png"
//       alt="Veg"
//     />:<img
//     className="non-veg-icon"
//     src="https://t3.ftcdn.net/jpg/06/09/29/66/360_F_609296657_KDmMfhFZ2VNuTkMn2uc1q3nd453UZJXk.jpg"/>
//     }
    
    
//     <h1>{name}</h1>
//     <h3>₹{price / 100}</h3>
//     <h5>{description}</h5>
//   </div>

//   <div className="menu-image">
//     <img src={imgUrl} alt={name} />
//   </div>
// </div>
   <div className="menu w-230 h-35 bg-white shadow-md rounded-lg flex justify-between items-center p-3 gap-5">

      {/* Left: Menu Details */}
      <div className="menu-details flex-1">
        {/* Veg / Non-Veg Icon */}
        <div className="mb-2">
          {isVeg == 1 ? (
            <img
              className="w-5 h-5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png"
              alt="Veg"
            />
          ) : (
            <img
              className="w-8 h-8"
              src="https://t3.ftcdn.net/jpg/06/09/29/66/360_F_609296657_KDmMfhFZ2VNuTkMn2uc1q3nd453UZJXk.jpg"
              alt="Non-Veg"
            />
          )}
        </div>

        <h1 className="text-lg font-semibold">{name}</h1>
        <h3 className="text-gray-800 font-medium">₹{price / 100}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>

      {/* Right: Image */}
      <div className="menu-image w-34 h-34 flex-shrink-0 rounded-md overflow-hidden">
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};
    
    
export default Menu;