import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// The provided hardcoded data
import { restaurantList } from "../config";

// Function to filter data based on search text
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const Body = () => {
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
  
  console.log("render");
  if (loading) {
    return <Shimmer />; // You can create a loading component (Shimmer) to show loading state.
    // setRestaurants()
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  if(FilteredRestaurants.length === 0) return <h1>No restaurant matched to your search!! Try Another One.</h1>



  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, Allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {FilteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            cloudinaryImageId={restaurant.info.cloudinaryImageId}
            lastMileTravelString={restaurant.info.sla.lastMileTravelString}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
