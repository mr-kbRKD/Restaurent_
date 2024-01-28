
import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About.js";
import Error from "./components/Error.js"
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/ProfileClass.js"
import Shimmer from "./components/Shimmer.js";
// import Instamart from "./components/Instamart.js"


const Instamart = lazy(() => import("./components/Instamart.js"));
const About = lazy(()=>import("./components/About.js"))




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
                element :(

                    <Body user = {{
                    name : "Ram Hari",
                    email : "ramKrishan@gmail.com",
                }} />
                ), 
                errorElement : <Error />,
            },
            {
                path : "/About",
                element : (
                    <Suspense fallback = {<h1>Loading About page...</h1>}>
                <About />
                </Suspense>
                ),
                errorElement : <Error />,
                children : [
                    {
                        path : "profile",
                        element : <Profile />,
                        errorElement : <Error />,
                    }
                ]
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
            },
            {
                path : "/instamart",
                element : (
                <Suspense fallback={<Shimmer /> }>
                <Instamart />
                </Suspense>
                ),
                errorElement : <Error />,
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router = {appRouter} />);
