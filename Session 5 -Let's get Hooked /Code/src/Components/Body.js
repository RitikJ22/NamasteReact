import { restaurantList } from "../Config";
import RestaurantCard from "./Restaurantcard";
import { useState } from "react";



function filterData(searchtText, restaurants) {
   const filterData= restaurants.filter((restaurant) => 
   restaurant.data.name.includes(searchtText) 
  );
  
  return filterData;
  
  
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchtText, setsearchtText] = useState("");

  return (
    <>
      {" "}
      <div className="">
        <input
          className="border-2 border-black"
          type="text"
          placeholder="Search"
          value={searchtText}
          onChange={(e) => {
            setsearchtText(e.target.value);
          }}
        />
        <button
          className=" border-2 border-black "
          onClick={() => {
            const data = filterData(searchtText, restaurants);
            setRestaurants(data);
            //console.log({data});
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
