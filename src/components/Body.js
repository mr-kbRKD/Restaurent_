import { restaurentList } from "../../config"
import RestaurentCard from "./ResturentCard"
import { useState } from "react";



function filterData(searchTxt, restaurants) {
  const filteredData = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchTxt.toLowerCase()))

  return filteredData;
}




const Body = () => {
  // let searchTxt = "Balram";

  const [restaurants, setrestaurants] = useState(restaurentList);
  const [searchTxt, setsearchTxt] = useState("");

  return (
    <>

      <div className="search-container">
        <input type="text"
          className="search-input"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setsearchTxt(e.target.value);
          }}
        />
        <button className="search-btn" onClick={() => {
          // need to filter the data
          const data = filterData(searchTxt, restaurants);
          setrestaurants(data);
        }}
        > Search it</button>
      </div>

      <div className="restaurent-list">
      {/* manual way */}
        {/* <RestaurentCard {...restaurentList[0]} />
        <RestaurentCard {...restaurentList[1]} /> */}
        {/* <RestaurentCard restaurent = {restaurentList[1]}/> */}

        {/* iterating */}
        {restaurants.map((restaurant) => {
          return (
            <RestaurentCard {...restaurant} />
          );
        })}
      </div>
    </>
  )
}

export default Body