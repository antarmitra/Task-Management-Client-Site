/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import loader from '../../assets/image/loading.json'
import Lottie from "lottie-react";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Lottie className="w-52  items-center mx-auto" animationData={loader}></Lottie>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;