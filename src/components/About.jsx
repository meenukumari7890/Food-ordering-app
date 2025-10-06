
import User from "./User";
import UserClass from "./UserClass";

const About =  () => {
return(
    <div className="about text-center m-4 p-4  ">
    {/* <h1>About</h1> */}
    <User name={"Meenu Prajapati (function)"}/>
    <UserClass name={"meenu (class )"}/>
    </div>
);
};
export default About;

// we are write the class about extends component{}
//import {component} form "react" also
// we are write the class about extends .React.component{}
//  import React form "react" also