import { LOGO_URL } from "../common/constant";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

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

    // subscribing to the store using useSelector hook
  const cartItems = useSelector((store) => store.cart.items);

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
          <li>
            <Link className="text-black text-lx" to="/cart">
              Cart- ({cartItems.length} items)
            </Link>
          </li>

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