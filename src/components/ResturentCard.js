const RestaurentCard = ({name, slug}) =>{
    {/* console.log(props); */}
  
    {/* const {name, slug} = restaurent; */}
    
    
      return (
          <>
          <div className="card">
              <img src="https://food.iskcondesiretree.com/wp-content/uploads/2011/09/Khaja1.jpg" alt="" />
              {/* when using props with it */}
              <h2>{name}</h2>
              {/* <h3>{restaurentList[0]?.menu?.lunch[0]?.name}</h3>
              <h4>{restaurent.data?.slug} stars</h4> */}
              </div>  
          </>
      )
  } 

  export default RestaurentCard;