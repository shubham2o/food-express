import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(()=> {fetchData()}, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6406443&lng=77.2746373&page_type=DESKTOP_WEB_LISTING"
      );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

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