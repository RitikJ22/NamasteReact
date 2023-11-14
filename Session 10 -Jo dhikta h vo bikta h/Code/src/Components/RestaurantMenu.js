
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Config.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import Shimmer from "./Shimmer.js";


const RestaurantMenu = () => {
  const params = useParams();
  //to read a dynamic URL params
  const { id } = params;

  const restaurantData= useRestaurantMenu(id);

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
      <div className="flex  bg-white mb-14 mt-14  ">

        {/* Menu card */}
        <div className="max-w-md shadow-md bg-white text-center mx-32  rounded-md
          duration-300 hover:scale-105 hover:border-b-4 ">
          <h1 className="text-xl font-semibold mb-2 text-center p-7"> {name} :{id} </h1>
         
          <img
            className="w-full h-60 "
            src={IMG_CDN_URL + cloudinaryImageId}
          />

          {/* <h2 className="text-lg font-semibold">{areaName} </h2> */}
          <div>
          <div className="flex justify-between p-3">
          <h2 className="text-lg font-semibold">{areaName} ,{city}</h2>
          <h2 className="text-lg font-semibold">{avgRating}Star</h2>
          </div>
          <h2 className="text-lg font-semibold text-left pl-3">{costForTwoMessage} </h2></div>

          </div>
          

        {/* //menuitems */}
        <div className="mx-32">
          <h1 className="text-xl font-semibold mb-4">MENU</h1>
          <ul className="list-disc pl-4">
            {itemCards?.map((item) => (
              <li className="" key={item?.card?.info?.id}>
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
