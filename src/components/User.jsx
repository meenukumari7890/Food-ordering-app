// import { useState } from "react";

// const User = ({name}) => {
//     const [count,setCount] = useState(0)
//     const [count1] = useState(1)
//      return (
//         <div className="user-card">
//             <h2>Name: {name}</h2>
//             <h3>Location: Noida</h3>
//             <h4>Email: Meenuprajapati@gmail.com</h4>
//             <h2 onClick={()=>{
//                 setCount(count+1)
//             }}>Count:- {count}</h2>
//             <h2>count:-{count1}</h2>
//         </div>
//      )
// }
// export default User;

// when we are call the props in  function comp like 
//  1. const user  = (props) <h2> {props.name}
// 2. const user = ({name}) <h2> {name}
import React, { useState, useEffect } from "react";

const UserFunctional = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    location: "",
    avatar_url: "",
  });

  // Equivalent to componentDidMount + componentDidUpdate for userInfo
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://api.github.com/users/meenukumari7890");
      const json = await data.json();
      console.log(json);
      setUserInfo(json);
    };

    getData();

    // Equivalent to componentWillUnmount
    return () => {
      console.log("component will unmounting");
    };
  }, []); // Empty dependency array means this runs once after mount

  // Equivalent to componentDidUpdate for userInfo
  useEffect(() => {
    if (userInfo.name) {
      console.log("component did update");
    }
  }, [userInfo]);

  const { name, location, avatar_url } = userInfo;

//   return (
//     <div className="user-card">
//       <img src={avatar_url} alt={name} />
//       <h2>Name: {name || "Meenu Kumari"}</h2>
//       <h3>Location: {location || "India"}</h3>
//       <h4>Contact: 8907654328</h4>
//     </div>
//   );
// };
return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6">
      <img
        src={avatar_url || "https://via.placeholder.com/150"}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center mb-2">
        Name: {name || "Meenu Kumari"}
      </h2>
      <h3 className="text-gray-600 text-center mb-1">
        Location: {location || "India"}
      </h3>
      <h4 className="text-gray-500 text-center">Contact: 8907654328</h4>
    </div>
  );
};


export default UserFunctional;
