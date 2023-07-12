import { IMG_CDN_URL } from "../Config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  lastMileTravelString,
}) => {
  //const { cloudinaryImageId , name , cuisines , avgRating , lastMileTravelString } = restaurant.data;

  return (
    <div className="w-64 justify-center border-2 border-black p-2 m-2">
      <img className="w-max" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(" ,")}</h3>
      <h4> {avgRating}Stars</h4>
      <h4> {lastMileTravelString} Away</h4>
    </div>
  );
};

export default RestaurantCard;
