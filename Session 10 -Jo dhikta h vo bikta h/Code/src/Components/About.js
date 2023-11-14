
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

 constructor(){
  super();
  //console.log("PC");
 }

 componentDidMount(){
  //console.log("PDM");

 }

  render(){
   // console.log("PR");
    return (
      <>
        <div>
          <h1 className="text-3xl uppercase text-center">About ME</h1>
  
          <UserClass name={'Ritik Jaiswal'} profile=" Front-End Developer" />
          
        </div>
      </>
    );
  }
 
};

export default About;
