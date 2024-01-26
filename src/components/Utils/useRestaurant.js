import {useEffect, useState} from 'react'
import { FETCH_RESTAURANT_URL } from '../../config';


const useRestaurant = ()=>{
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
          const response = await fetch(
            (FETCH_RESTAURANT_URL)
          );
          const json = await response.json();
          console.log(json);
        //   console.log(data.cards.card.card.gridElements.infoWithStyle.info[0]);
        //   console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||[]);
        setRestaurant(json.data);
          
      }
    return restaurant;
}

export default useRestaurant;