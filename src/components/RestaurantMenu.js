import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "./Utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(null);



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
