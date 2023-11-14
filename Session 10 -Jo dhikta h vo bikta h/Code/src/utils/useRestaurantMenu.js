import { MENU_API } from "../utils/Config.js"
import { useEffect, useState } from "react";


const useRestaurantMenu =(id)=>
{

const [restaurantData, setRestaurantData] = useState(null);

useEffect(() => {
  getRestaurantInfo();
}, []);

async function getRestaurantInfo() {
  const data = await fetch(MENU_API + id);
  const json = await data.json();
  setRestaurantData(json?.data);
  console.log(json?.data);
}

return restaurantData;

};

export default useRestaurantMenu;
