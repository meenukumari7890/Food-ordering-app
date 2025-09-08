
const Menu = (props) =>{
    const {name,description,price,imageId,isVeg}=props.menuData.card.info;

    const imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+ imageId;
    return(
        <div className="menu">
  <div className="menu-details">

    {
        isVeg==1?<img
      className="veg-icon"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png"
      alt="Veg"
    />:<img
    className="non-veg-icon"
    src="https://t3.ftcdn.net/jpg/06/09/29/66/360_F_609296657_KDmMfhFZ2VNuTkMn2uc1q3nd453UZJXk.jpg"/>
    }
    
    
    <h1>{name}</h1>
    <h3>₹{price / 100}</h3>
    <h5>{description}</h5>
  </div>

  <div className="menu-image">
    <img src={imgUrl} alt={name} />
  </div>
</div>

    
    );
};
export default Menu;