import { Outlet, Navigate } from "react-router-dom";
import { setAuthToken } from "./setAuthToken";


const PrivateRoutes = () => {
    const token = localStorage.getItem("token");
        if(token){ 
            setAuthToken(token)  
            return <Outlet/>
        }else {return <Navigate to="/"/>}
}

export default PrivateRoutes;