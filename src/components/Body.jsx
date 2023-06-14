import restaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {
            restaurantsList.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
            })
          }
        </div>
      </div>
    );
  };

export default Body;