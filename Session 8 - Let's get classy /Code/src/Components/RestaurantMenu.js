import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config.js";
import Shimmer from "./Shimmer.js";
import { MENU_API } from "../Config.js";

const RestaurantMenu = () => {
  const params = useParams();
  //to read a dynamic URL params
  const { id } = params;

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

  if (restaurantData === null) return <Shimmer />;

  const {
    name,
    cloudinaryImageId,
    city,
    avgRating,
    areaName,
    costForTwoMessage,
  } = restaurantData?.cards?.[0]?.card?.card?.info;
  console.log(restaurantData?.cards?.[0]?.card?.card?.info);

  const itemCards =
    restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.itemCards;

  console.log(itemCards);

  return (
    <>
      <div className="flex justify-around">
        <div>
          <h1> RestaurantMenu :{id} </h1>
          <h1> {name}</h1>
          <img
            className="rounded-lg w-64 h-72 "
            src={IMG_CDN_URL + cloudinaryImageId}
          />
          <h2>{city} </h2>
          <h2>{areaName} </h2>
          <h2> {avgRating}Stars</h2>
          <h2>{costForTwoMessage} </h2>
        </div>
        <div>
          <h1>MENU</h1>
          <ul>
            {itemCards.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}-{"Rs."} {item?.card?.info?.price / 100}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
