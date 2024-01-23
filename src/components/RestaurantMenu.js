import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  console.log(useState());
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log(json);
    //   console.log(data.cards.card.card.gridElements.infoWithStyle.info[0]);
    //   console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||[]);
    setRestaurant(json.data);
      
  }

  return (!restaurant) ? <Shimmer /> : (
    <>
      <h1>Restaurant id: {resId}</h1>
      {restaurant && (
        <div>
        
        {console.log(restaurant?.cards[1].card?.card?.gridElements.infoWithStyle.restaurants[0].info.id)}
          <h2>{restaurant?.cards[1].card?.card?.gridElements.infoWithStyle.restaurants[0].info.name}</h2>
          <h2>{restaurant?.cards[1].card?.card?.gridElements.infoWithStyle.restaurants[0].info.areaName}</h2>
          <img className="img restaurant-img" src={IMG_CDN_URL + restaurant?.cards[1].card?.card?.gridElements.infoWithStyle.restaurants[0].info.cloudinaryImageId} alt="" srcset="" />
          {/* <p>Area: {restaurant.info.areaName}</p> */}
          <p>Average Rating: {restaurant?.cards[1].card?.card?.gridElements.infoWithStyle.restaurants[0].info.avgRating}</p> 
          <p>Cost: {restaurant?.cards[1].card?.card?.gridElements.infoWithStyle.restaurants[0].info.costForTwo}</p> 
          <p>Time {restaurant?.cards[1].card?.card?.gridElements.infoWithStyle.restaurants[0].info.availability.nextCloseTime}</p> 
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
