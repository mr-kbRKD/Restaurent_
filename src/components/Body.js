import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// The provided hardcoded data
import { restaurantList } from "../config";
import { filterData } from "./Utils/Helper"
import useOnline from "./Utils/useOnline";





const Body = ({user}) => {
  const [Allrestaurants, setAllRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    getRestaurants();
  }, []);


  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setAllRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        []
      );
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        []);
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>⚠️⚠️⚠️ You are offline biddu, check internet ⚠️⚠️⚠️</h1>
  };

  console.log("render");
  if (loading) {
    return <Shimmer />; // You can create a loading component (Shimmer) to show loading state.
    // setRestaurants()
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  if (FilteredRestaurants.length === 0) return <h1>No restaurant matched to your search!! Try Another One.</h1>




  return (
    <>
      <div className="bg-gray-100 my-3 p-5 ">
        <input
          type="text"
          className="p-2 m-2 focus:bg-slate-400 focus:text-white"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="ml-4 bg-slate-600 hover:bg-slate-900 hover:shadow-md p-2 text-white rounded-xl"
          onClick={() => {
            const data = filterData(searchText, Allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
        {FilteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            cloudinaryImageId={restaurant.info.cloudinaryImageId}
            lastMileTravelString={restaurant.info.sla.lastMileTravelString}
            user = {user}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
