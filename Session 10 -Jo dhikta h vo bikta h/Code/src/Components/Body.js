import { restaurantList, newReslist } from "../utils/Config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  const onlineStatus = useOnlineStatus ();

  

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
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (onlineStatus === false)
  return (<h1>Looks Like your interent is not working</h1>);

  //not rendering a component ( Early return )
  if (!allrestaurants) return null;

 
  //Conditional rendering for shimmer UI
  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {" "}
      <div className="mt-14 mb-14">

      {/* //search bar */}
      <div className="flex items-center bg-white rounded-md p-2 mx-auto max-w-screen-lg border border-gray-700 justify-center w-1/2 ">
          <input
            type="Search"
            placeholder="Search for restaurants and food..."
            id="default-search"
            className="flex-grow p-2 focus:outline-none"
            required
            value={searchtText}
            onChange={(e) => {
              setsearchtText(e.target.value);
            }}
           />
        <button
          type="submit"
          className=" text-white p-2 rounded-md"
          onClick={() => {
            const data = filterData(searchtText, allrestaurants);
            setFilteredRestaurants(data);
            //console.log({data});
          }}
        >
        <div className="w-1/2">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
          
        </button>

        {/* <input
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Search"
            value={searchtText}
            onChange={(e) => {
              setsearchtText(e.target.value);
            }}
          />
          <button
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            onClick={() => {
              const data = filterData(searchtText, allrestaurants);
              setFilteredRestaurants(data);
              //console.log({data});
            }}
          >
            Search
          </button>
          */}
      </div>

      {/* // RestaurantCards */}
      <div className="flex flex-wrap m-6">
        {/*write logic for no restaurant here*/}
        {filteredrestaurants.map((res) => (
          <Link key={res?.info?.id} to={"/restaurant/" + res?.info?.id}>
            <RestaurantCard {...res?.info} />
          </Link>
        ))}
      </div>

      </div>
      
    </>
  );
};

export default Body;
