import { Outlet, Navigate } from "react-router-dom";
import { setAuthToken } from "./setAuthToken";


const PrivateRoutes = () => {
    const token = localStorage.getItem("token");
    if (token) {
        //if the token exists, attache it to the header using the function right below
        setAuthToken(token)
        //redirecting to the private routes children if all is good
        return <Outlet />
    } else { return <Navigate to="/" /> }
}

export default PrivateRoutes;