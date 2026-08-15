import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (payload) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/jobTracker/api/auth/signup`,
        payload,
        {
          withCredentials: true,
        },
      );
      if (response) {
        await checkAuth();
        return true;
      }
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
      console.log("ERROR:", error);
      return false;
    }
  };

  const checkAuth = async () => {
    try {
      const responseUser = await axios.get(
        `http://localhost:3000/jobTracker/api/auth/getMe`,
        {
          withCredentials: true,
        },
      );
      if (responseUser) {
        setAuth(responseUser.data);
      }
    } catch (error) {
      setAuth(null);
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);
  const loginUser = async (payload) => {
    try {
      const user = await axios.post(
        `http://localhost:3000/jobTracker/api/auth/login`,
        payload,
        {
          withCredentials: true,
        },
      );
      if (user) {
        await checkAuth();
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/jobTracker/api/auth/logout`,{},
        {
          withCredentials: true,
        },
      );
      if (response) {
        setAuth(null);
        await checkAuth();
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ createUser, loading, auth, loginUser, checkAuth, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
