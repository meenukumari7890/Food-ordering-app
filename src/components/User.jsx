import { useState } from "react";

const User = ({name}) => {
    const [count,setCount] = useState(0)
    const [count1] = useState(1)
     return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Noida</h3>
            <h4>Email: Meenuprajapati@gmail.com</h4>
            <h2 onClick={()=>{
                setCount(count+1)
            }}>Count:- {count}</h2>
            <h2>count:-{count1}</h2>
        </div>
     )
}
export default User;

// when we are call the props in  function comp like 
//  1. const user  = (props) <h2> {props.name}
// 2. const user = ({name}) <h2> {name}
