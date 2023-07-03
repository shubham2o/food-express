import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6406443&lng=77.2746373&restaurantId=24279&submitAction=ENTER"
        );

        const json = await data.json();
        console.log(json.data);

        setResInfo(json.data);
    }

    // const { cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    return (resInfo === null) ? <Shimmer /> :
        (
            <div className="menu" >
                <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
                <h3>{resInfo?.cards[0]?.card?.card?.info.cuisines}</h3>
                <h3>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
                <ul>
                    <li>Biryani</li>
                    <li>Burgers</li>
                    <li>Diet Coke</li>
                </ul>
            </div>
        )
}

export default RestaurantMenu;