import {createContext, useContext} from "react";

const UserContext = createContext({
    user : {
        name : "Yashomati Nandan",
        email : "yashomatinandan@gmail.com"
    }
});

export default UserContext;