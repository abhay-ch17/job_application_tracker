import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Link, replace, useNavigate } from "react-router-dom";

const Navbar = ({setShowForm, setUpdateId, setExistData}) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const logoutHandler = async () => {
    const res = await logout();
    res && navigate("/login", replace);
  };

  return (
    <>  <div className="fixed w-[100%] top-[0%]">
          <div className="w-[100%] h-[80px] bg-gray-700 text-white flex justify-center">
            <div className="flex w-[90%] h-[100%] justify-between items-center">
              <div className="logo">
                <p className="font-bold text-xl uppercase bg-red-800 py-1 px-2 rounded-tr-3xl rounded-br-3xl">
                  Tra<span className="text-red-800 bg-white py-1">C</span>ker
                </p>
              </div>
              <div className="actions font-bold text-md flex gap-20 justify-center w-[30%]">
                <a href="#">Home</a>
                <button onClick={() => {
                  setShowForm(true)
                  setUpdateId(null);
                  setExistData(null)
                  }}>Create</button>
                <button
                  onClick={() => logoutHandler()}
                  className="cursor-pointer"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Navbar;
