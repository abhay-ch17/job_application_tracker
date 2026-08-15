import { useContext, useRef, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Link, replace, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const Email = useRef();
  const Password = useRef();
  const navigate = useNavigate();
  const submitHandler = async(e) => {
    e.preventDefault();
    const payload = {
      Email: Email.current.value,
      Password: Password.current.value,
    };
    Email.current.value = Password.current.value = "";
    setLoading(true);
    const response = await loginUser(payload);
    if(response){
      setLoading(false);
      navigate("/", replace);
    }else{
      setLoading(false);
      alert("Invalid credentials");
    }
  };
  if(loading){
    return <p className="font-bold text-3xl">Loading...</p>
  }else
  return (
    <>
      <div className="w-[350px] h-[380px] rounded-md border-2 border-gray-300">
        <div className="pt-4 pl-4">
          <p className="text-md font-semibold">Job tracker</p>
          <p className="text-md text-gray-400 border-b-2 border-gray-200 w-[50%]">
            sign in to your account
          </p>
        </div>
        <div className="">
          <form
            action=""
            className="flex flex-col h-[100%] gap-6 mt-7 text-center"
            onSubmit={(e)=>submitHandler(e)}
          >
            <div>
              <p className="text-left ml-3 font-semibold">Email</p>
              <input
                type="text"
                placeholder=" name@example.com"
                className="border-2 w-[95%] h-[34px] rounded-md border-gray-200"
                ref={Email}
              />
            </div>
            <div>
              <p className="text-left ml-3 font-semibold">Password</p>
              <input
                type="password"
                placeholder=" Password"
                name="password"
                className="border-2 w-[95%] h-[34px] rounded-md border-gray-200"
                ref={Password}
              />
            </div>
            <input
              type="submit"
              value="login"
              className="button w-[95%] h-[34px] bg-blue-500 font-bold uppercase text-white rounded-sm mt-[15px] mx-auto"
            />
          </form>
        </div>
        <div className="pl-4">
          <p>
            Don't have an account?
            <Link to="/signup" className="text-blue-700 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
