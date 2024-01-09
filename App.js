/*  */

import React from "react";
import ReactDOM from "react-dom/client";

// react element 
// const Title = () => (
//     <h1 id="52" key={620}>
// Hare Krishna</h1>
// );
const Title = () => (
    <a href="/">
    <img className="logo" src="data:image/jpeg;base64,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" alt="logo" /></a>
);


// Functional compo

const Header = () =>
(
        <div className="header">
        <Title />
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>

        </div>
        </div>
);


{/* making hard-corded card dynamic */}

{/* const Khaja = {
    name : "Khaja",
    image : "https://food.iskcondesiretree.com/wp-content/uploads/2011/09/Khaja1.jpg",
    cusines : ["Sweets", "Indian"],
    rating : 4.8
} */}

const restaurentList = 
    [
        {
        name: 'Poutine Palace',
          slug: 'poutine-palace',
          images: {
            thumbnail:
              'node_modules/place-my-order-assets/images/4-thumbnail.jpg',
            owner: 'node_modules/place-my-order-assets/images/3-owner.jpg',
            banner: 'node_modules/place-my-order-assets/images/2-banner.jpg',
          },
          menu: {
            lunch: [
              {
                name: 'Crab Pancakes with Sorrel Syrup',
                price: 35.99,
              },
              {
                name: 'Steamed Mussels',
                price: 21.99,
              },
              {
                name: 'Spinach Fennel Watercress Ravioli',
                price: 35.99,
              },
            ],
            dinner: [
              {
                name: 'Gunthorp Chicken',
                price: 21.99,
              },
              {
                name: 'Herring in Lavender Dill Reduction',
                price: 45.99,
              },
              {
                name: 'Chicken with Tomato Carrot Chutney Sauce',
                price: 45.99,
              },
            ],
          },
          address: {
            street: '230 W Kinzie Street',
            city: 'Green Bay',
            state: 'WI',
            zip: '53205',
          },
          _id: '3ZOZyTY1LH26LnVw',
        },
        {
          name: 'Cheese Curd City',
          slug: 'cheese-curd-city',
          images: {
            thumbnail:
              'node_modules/place-my-order-assets/images/2-thumbnail.jpg',
            owner: 'node_modules/place-my-order-assets/images/3-owner.jpg',
            banner: 'node_modules/place-my-order-assets/images/2-banner.jpg',
          },
          menu: {
            lunch: [
              {
                name: 'Ricotta Gnocchi',
                price: 15.99,
              },
              {
                name: 'Gunthorp Chicken',
                price: 21.99,
              },
              {
                name: 'Garlic Fries',
                price: 15.99,
              },
            ],
            dinner: [
              {
                name: 'Herring in Lavender Dill Reduction',
                price: 45.99,
              },
              {
                name: 'Truffle Noodles',
                price: 14.99,
              },
              {
                name: 'Charred Octopus',
                price: 25.99,
              },
            ],
          },
          address: {
            street: '2451 W Washburne Ave',
            city: 'Green Bay',
            state: 'WI',
            zip: '53295',
          },
          _id: 'Ar0qBJHxM3ecOhcr',
        },
        {
          name: 'Mera restaurent ',
          slug: 'cheese-curd-city',
          images: {
            thumbnail:
              'node_modules/place-my-order-assets/images/2-thumbnail.jpg',
            owner: 'node_modules/place-my-order-assets/images/3-owner.jpg',
            banner: 'node_modules/place-my-order-assets/images/2-banner.jpg',
          },
          menu: {
            lunch: [
              {
                name: 'Ricotta Gnocchi',
                price: 15.99,
              },
              {
                name: 'Gunthorp Chicken',
                price: 21.99,
              },
              {
                name: 'Garlic Fries',
                price: 15.99,
              },
            ],
            dinner: [
              {
                name: 'Herring in Lavender Dill Reduction',
                price: 45.99,
              },
              {
                name: 'Truffle Noodles',
                price: 14.99,
              },
              {
                name: 'Charred Octopus',
                price: 25.99,
              },
            ],
          },
          address: {
            street: '2451 W Washburne Ave',
            city: 'Green Bay',
            state: 'WI',
            zip: '53295',
          },
          _id: 'Ar0qBJHxM3ecOhcr',
        },
    ]


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





const Footer = () =>{
    return (
        <div>
            <h4>Footer</h4>
        </div>
    )
}
    

const AppLayout = () =>{

    return (
        <>
        <>
            <Header />
            <Body />
            <Footer />

        </>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);
