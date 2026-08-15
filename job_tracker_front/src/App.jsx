import {
  BrowserRouter,
  Meta,
  Route,
  Routes,
} from "react-router-dom";
import AddTask from "./pages/dashboard/AddTask";
import HomePage from "./pages/dashboard/HomePage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ProtectedRoutes from "./pages/dashboard/ProtectedRoute";
import DeletePopup from "./pages/dashboard/DeletePopup";

const App = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
   
    </> 
  );
};

export default App;
