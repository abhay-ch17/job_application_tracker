import { useContext, useReducer, useRef, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Link, replace, useNavigate } from "react-router-dom";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const Username = useRef();
  const Email = useRef();
  const Password = useRef();
  const ConfirmPassword = useRef();
  const navigate = useNavigate();
const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (Password.current.value !== ConfirmPassword.current.value)
      return alert("Please check your confirm password");
    const payload = {
      Username: Username.current.value,
      Email: Email.current.value,
      Password: Password.current.value,
      ConfirmPassword: ConfirmPassword.current.value,
    };
    Username.current.value = Email.current.value = Password.current.value = ConfirmPassword.current.value = "";
    const response = await createUser(payload);
    if(response){
      setLoading(false);
    response && navigate("/", replace);
    }else{
      setLoading(false);
      alert("server error");
    }
  };
  if(loading){
    return <p className="font-bold text-3xl">Loading...</p>
  }else
  return (
    <>
      <div className="w-[350px] h-[470px] rounded-md border-2 border-gray-300">
        <div className="pt-3 pl-4">
          <p className="text-md font-semibold">Job tracker</p>
          <p className="text-md text-gray-400 border-b-2 border-gray-200 w-[51%]">
            sign up to your account
          </p>
        </div>
        <div className="">
          <form
            action=""
            className="flex flex-col h-[100%] gap-3 mt-5 text-center"
            onSubmit={(e) => submitHandler(e)}
          >
            <div>
              <p className="text-left ml-3 font-semibold">Username</p>
              <input
                type="text"
                placeholder=" Username"
                className="border-2 w-[95%] h-[34px] rounded-md border-gray-200"
                ref={Username}
              />
            </div>
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
                placeholder=" *****"
                className="border-2 w-[95%] h-[34px] rounded-md border-gray-200"
                ref={Password}
              />
            </div>
            <div>
              <p className="text-left ml-3 font-semibold">Confirm Password</p>
              <input
                type="password"
                placeholder=" *****"
                className="border-2 w-[95%] h-[34px] rounded-md border-gray-200"
                ref={ConfirmPassword}
              />
            </div>
            <input
              type="submit"
              value="sign-up"
              className="button w-[95%] h-[34px] bg-blue-500 font-bold uppercase text-white rounded-sm mt-[15px] mx-auto"
            />
          </form>
        </div>
        <div className="pl-4">
          <p>
            Already have an account?
            <Link to="/login" className="text-blue-700 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
