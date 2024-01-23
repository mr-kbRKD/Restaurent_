import { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileFunction from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log("Parent - constructor");

    }

    componentDidMount() {
        console.log("Parent - API");
    }
    render() {
        console.log("Parent - render");
        return (
            <>
                <h1>This is our about us page of restaurant site. </h1>
                {/* <Outlet />  */}
                {/* <ProfileClass name= {"First child"} /> */}
                <ProfileFunction name = {"First Child"} />
                
            </>
        )
    }
}


export default About;


/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
