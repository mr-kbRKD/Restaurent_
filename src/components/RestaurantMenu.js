import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
    const { id } = useParams();
    console.log(id);
    return (
        <>
        <h1>Restaurant id : {id}</h1>
        </>
    )
}

export default RestaurantMenu;