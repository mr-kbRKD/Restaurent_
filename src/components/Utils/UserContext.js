import {createContext, useContext} from "react";

const UserContext = createContext({
    user : {
        name : "Yashomati Nandan",
        email : "yashomatinandan@gmail.com"
    }
});

UserContext.displayName = "UserContext";

export default UserContext;