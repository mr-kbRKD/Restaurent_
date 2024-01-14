// Import necessary dependencies and components
import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// The provided hardcoded data
import { restaurantList } from "../config";

// Function to filter data based on search text
function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filteredData;
}

// Body component
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect to simulate API call and set initial data
  useEffect(() => {
    setAllRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  }, []);

  // Event handler for search button click
  const handleSearch = () => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  return (
    <>
      {/* Search input and button */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Render restaurant list */}
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurant matches your filter!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
