import { restaurantList, newReslist } from "../Config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//Searchbox logic
function filterData(searchtText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchtText?.toLowerCase())
  );

  return filterData;
}

//Main body
const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchtText, setsearchtText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  //API CALL
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.2029674&lng=77.9888538&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    //optional chaining 
    setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //Maintained 2 sets of data at same time
    setFilteredRestaurants (
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  
  //not rendering a component ( Early return )
  if (!allrestaurants)return null;

  //Conditional rendering for shimmer UI
  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {" "}
      <div className="m-6">
        <input
          className="border-2 border-black rounded-lg"
          type="text"
          placeholder="Search"
          value={searchtText}
          onChange={(e) => {
            setsearchtText(e.target.value);
          }}
        />
        <button
          className=" border-2 border-black rounded-lg "
          onClick={() => {
            const data = filterData(searchtText, allrestaurants);
            setFilteredRestaurants(data);
            //console.log({data});
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap m-6">
        {/*write logic for no restaurant here*/ }
        {filteredrestaurants.map((res) => {
          return <RestaurantCard {...res?.info} key={res?.info?.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
