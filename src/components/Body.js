import { restaurentList } from "../../config"
import RestaurentCard from "./ResturentCard"

const Body = () =>{
  return (
      <>
      <div className="restaurent-list">
         <RestaurentCard {...restaurentList[0].data} />
         {/* <RestaurentCard restaurent = {restaurentList[1]}/> */}
         {/* <RestaurentCard />
         <RestaurentCard />
         <RestaurentCard />
         <RestaurentCard />
         <RestaurentCard />
         <RestaurentCard />
         <RestaurentCard />
         <RestaurentCard /> */}
      </div>
      </>
  )
}

export default Body