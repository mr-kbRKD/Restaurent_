
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js"
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";



const AppLayout = () =>{

    return (
        <>
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error />,
        children :[
            {
                path : "/",
                element : <Body />,
                errorElement : <Error />,
            },
            {
                path : "/About",
                element : <About />,
                errorElement : <Error />,
            },
            {
                path : "/Contact",
                element : <Contact />,
                errorElement : <Error />,
            },
            {
                path : "/Restaurant/:id",
                element : <RestaurantMenu />,
                errorElement : <Error />,
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router = {appRouter} />);
