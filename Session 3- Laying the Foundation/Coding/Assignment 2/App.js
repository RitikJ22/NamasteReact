import react from 'react';
import ReactDom from 'react-dom/client';

const Header=()=>{
    return(<>
     <header className="flex justify-between items-center bg-gray-100 w-auto"  >
    
          <div className="bg-gray-100">
            <img className="w-8 cursor-pointer ml-10 p-1 hover:scale-110" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="logo"/>
           </div>
           <div >
            <input className="w-96 rounded-lg focus:border-x-0" type='text' placeholder='Search'/> 
            <button className='ml-2 border-black' type='submit'>Submit</button>
            </div>
           <div>
            <img className="w-12 cursor-pointer mr-10 p-1" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt ='icon'/>
           </div>
    
     </header>
       
    </>
    )
    
}

const root= ReactDom.createRoot(document.getElementById('root'));
root.render(<Header/>);