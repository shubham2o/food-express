import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantsList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
            setListOfRestaurants(filteredList);
          }} 
        > Top Rated Restaurants 
        </button>
      </div>
      <div className="res-container">
        { listOfRestaurants.map((restaurant) => {
              return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Body;