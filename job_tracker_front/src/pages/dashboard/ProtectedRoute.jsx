import { useContext, useEffect } from "react";
import { Navigate, Outlet, replace } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
import HomePage from "./HomePage";

const ProtectedRoutes = () => {
  const { auth, loading } = useContext(AuthContext);
  if (loading) {
    return <p>Loading...</p>;
  }

  if(auth){
    return <Outlet/>
  }else{
    return <Navigate to="/login" replace/>
  }
};

export default ProtectedRoutes;
