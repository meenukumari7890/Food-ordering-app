import React from "react";

class UserClass extends React.Component {

  constructor(props){
    super(props);
    console.log(props);

    // this.state = {
    //      count : 0,
    //     count1 : 2
    // };
    //  console.log(" child Constructor")

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default"
      }
    }
  }

  componentDidMount() {
    // console.log("child constructor to mount")

    // Define async function inside componentDidMount

    // API call
    const getData = async () => {
      const data = await fetch("https://api.github.com/users/meenukumari7890");
      const json = await data.json();

      console.log(json);

      // Update state inside the async function after fetching
      this.setState({
        userInfo: json,
      });
    }
   
    getData(); // Call the function to run it
    
  } ;
    componentDidUpdate(){
        console.log("component did update")
    };
    componentWillUnmount(){
      console.log("component will unmounting")
    }

  render() {
    // console.log('child render')
    const { name, location, avatar_url } = this.state.userInfo;
    // const {count,count1} = this.state
    // return (
    //   <div className="user-card">
    //     <img  src={avatar_url}/>
    //     <h2>Name: Meenu Kumari</h2>
    //     <h3>Location: India</h3>
    //     <h4>Contact: 8907654328</h4>
    //   </div>
    // );
  }
}

export default UserClass;

// the class base component how can call the props 
// it is call the constructor (props) {} 
// and also right super (props);
// also call the console.log   don't remove the comment and correct code



/* 
* --------Mounting------
* constructor (dummy)
* render (dummy)
*  <html dummy>
* component did mount
*   <api call>
*    <.this.setState> state variable is update
*
*  ----------update--
*
* render(api data)
* <html (new api data)>
* componentDid update
*/
