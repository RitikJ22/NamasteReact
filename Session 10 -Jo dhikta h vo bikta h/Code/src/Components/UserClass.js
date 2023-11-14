import React from "react";

class UserClass extends React.Component{

  constructor(props){
    super(props);
    console.log("CC");


    this.state= {
      userInfo :{
        company:"Dummy",
        name: " Dummy",
        bio:"Dummy",
      },
      count:0,
      
      
    };
      

   }

   async componentDidMount(){
   // console.log("CDM");
   const data= await fetch("https://api.github.com/users/RitikJ22");
   const json= await data.json();
   console.log(json);

   this.setState({
   userInfo: json

   });


 

   }
  

   componentDidUpdate(){
    console.log("Update");
   }
  

  componentWillUnmount(){
    console.log("Unmount");
  }
    render(){
     console.log("CR");

      const {name , company, avatar_url,bio}= this.state.userInfo;
      const{count}=this.state;
        return ( 
           
          <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                  <div className="max-h-96 md:h-screen">
                    <img className="w-screen h-screen object-cover object-top" src={avatar_url} alt=""/>
                  </div>
                  <div className="flex bg-gray-100 p-10">
                    <div className="mb-auto mt-auto max-w-lg">
                      <h1 className="text-3xl uppercase">Name : {name}</h1>
                      <p className="font-semibold mb-5">{bio}</p>
                      <p>{company}</p>
                  <div className="container mx-auto">
                      <button className="bg-black rounded-md py-3 px-7 mt-6 text-white"
                      onClick={()=>{
                        this.setState({
                          count: count+1
                        });
                      }
                      
                      
                      }>Count-{count}</button>

                      <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
                    </div>
                  </div>
                </div>
              </div>
      );
            
         
    }
}


export default UserClass;