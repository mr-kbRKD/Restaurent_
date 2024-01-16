// const RestaurentCard = ({ name, slug, menu }) => {
    
    //     return (
        //         <>
//             <div className="card">
//                 <img src="https://food.iskcondesiretree.com/wp-content/uploads/2011/09/Khaja1.jpg" alt="" />
//                 {/* when using props with it */}
//                 <h2>{name}</h2>
//                 <h2>{slug}</h2> 
//                 <div>
//                     <h3>Menu - Lunch</h3>
//                     <ul>
//                         {menu?.lunch?.map((item, index) => (
    //                             <li key={index}>
    //                                 {item.name} - ${item.price}
    //                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 {/* <h3>{restaurentList[0]?.menu?.lunch[0]?.name}</h3>
//               <h4>{restaurent.data?.slug} stars</h4> */}
//             </div>
//         </>
//     )
// }

// new API have to use
import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name}/>
      <h2>{name}</h2>
      {cuisines && Array.isArray(cuisines) ? (
        <h3>{cuisines.join(", ")}</h3>
      ) : null}
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;