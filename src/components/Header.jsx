import { LOGO_URL } from "../common/constant";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {

      let btnName = "Login";

      const [btnNameReact, setBtnNameReact] = useState("Login");
      const onlineStatus = useOnlineStatus();

// if no dependency array => useEffect is called on every render
// if dependency array is empty = [] => iseEffect is called on initial render(just once)
// if  dependency array is [btnNameReact] => called everytime btnNameReact is update
         useEffect(() =>{
        console.log("useEffect called");
      }, [btnNameReact]);
      
      return(
            <div className="flex justify-between bg-pi  ">
                  <div className="img-container">
                        <img className="w-40 "
                        src={LOGO_URL}/>
                  </div>
                    <div className="nav-items bg">
                     <ul className="flex p-4 m-6 bg-pink-100">
                        <li>Online Status:{onlineStatus ? "✅" : "❌"}
                        </li>
                        <li>
                            < Link to="/">Home</Link></li>
                         <li>
                             <Link to="/about"> About Us</Link>
                             </li>
                              <li>
                             <Link to="/grocery">Grocery</Link> 
                             </li>
                          <li>
                             <Link to="/contact">Contact Us</Link> 
                             </li>
                           <li>Cart</li>
                          <button className="login" onClick={()=>{ btnNameReact === "Login" ? 
                               setBtnNameReact("Logout"): setBtnNameReact("Login");
                               }}>{btnNameReact} </button>
                     </ul>
                  </div>
            </div>
      );
};
export default Header;