import { LOGO_URL } from "../common/constant";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import UserContext from "../../utils/UserContext";

const Header = () => {

      let btnName = "Login";

      const [btnNameReact, setBtnNameReact] = useState("Login");
      const onlineStatus = useOnlineStatus();

      // const {loggedInUser} = useContext(UserContext);

// if no dependency array => useEffect is called on every render
// if dependency array is empty = [] => iseEffect is called on initial render(just once)
// if  dependency array is [btnNameReact] => called everytime btnNameReact is update
         useEffect(() =>{
        console.log("useEffect called");
      }, [btnNameReact]);
      
      // return(
      //       <div className="flex justify-between bg-pi  ">
      //             <div className="img-container">
      //                   <img className="w-40 "
      //                   src={LOGO_URL}/>
      //             </div>
      //               <div className="nav-items bg">
      //                <ul className="flex p-4 m-6 bg-pink-100">
      //                   <li>Online Status:{onlineStatus ? "✅" : "❌"}
      //                   </li>
      //                   <li>
      //                       < Link to="/">Home</Link></li>
      //                    <li>
      //                        <Link to="/about"> About Us</Link>
      //                        </li>
      //                         <li>
      //                        <Link to="/grocery">Grocery</Link> 
      //                        </li>
      //                     <li>
      //                        <Link to="/contact">Contact Us</Link> 
      //                        </li>
      //                      <li>Cart</li>
      //                     <button className="login" onClick={()=>{ btnNameReact === "Login" ? 
      //                          setBtnNameReact("Logout"): setBtnNameReact("Login");
      //                          }}>{btnNameReact} </button>
      //                </ul>
      //             </div>
      //       </div>
      // );

    return (
    <div className="flex justify-between items-center px-1 py-0 shadow-md bg-pink-50">
      {/* Logo */}
      <div className="img-container">
        <img className="w-30 sm:w-30" src={LOGO_URL} alt="Logo" />
      </div>

      {/* Navigation Items */}
      <div className="nav-items">
        <ul className="flex flex-wrap gap-6 items-center bg-pink-50 p-4 rounded-lg">
          <li className="text-semibold font-medium ">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li>
            <Link className="text-black hover:underline" to="/">
              Home
            </Link>
          
          </li>
          <li>
            <Link className="text-black hover:underline" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-black hover:underline" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="text-black hover:underline" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="text-black">Cart</li>

          <li>
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
              onClick={() =>
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
              }
            >
              {btnNameReact}
            </button>

            {/* <li className="text-black">{loggedInUser}</li> */}
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Header;