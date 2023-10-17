import { IMG_CDN_URL } from "../Config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
    deliveryTime,
    lastMileTravelString

}) => {
  //const { cloudinaryImageId , name , cuisines , avgRating , lastMileTravelString } = restaurant.data;

  return (
    <div className="m-2 p-4 justify-items-center w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg w-64 h-72 " src={IMG_CDN_URL + cloudinaryImageId} />
     
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h4 className="">{cuisines?.join(" ,")}</h4>
      <h4> {avgRating}Stars</h4>
      <h4>{costForTwo } </h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{lastMileTravelString}Away</h4>
    </div>
  );
};




export default RestaurantCard;
