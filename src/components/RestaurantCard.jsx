import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, costForTwo, deliveryTime, avgRating}) => {
    return (
      <div className="res-card">
        <img
          className="res-image"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Image"
        />
        <h2>{name}</h2>
        <h3>📃 {cuisines.join(", ")}</h3>
        <h4>⭐ {avgRating} stars</h4>
        <h4>🚚 {deliveryTime} MINS</h4>
        <h4>💸 ₹{costForTwo / 100} FOR TWO</h4>
      </div>
    );
  };

export default RestaurantCard;