import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => { fetchData() }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6406443&lng=77.2746373&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (listOfRestaurants.length === 0) ? <Shimmer /> :
    (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />

            <button
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter(
                  res => res.data.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }}
            > Search
            </button>
          </div>

          <button className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
              setListOfRestaurants(filteredList);
            }}
          > Top Rated Restaurants
          </button>
        </div>

        <div className="res-container">
          {filteredRestaurant.map(restaurant => (
            <Link
              key={restaurant.data.id}
              to={"/restaurants/" + restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} resData={restaurant} />
            </Link>
          ))
          }
        </div>
      </div>
    );
};

export default Body;