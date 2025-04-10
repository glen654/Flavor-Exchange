import { useNavigate } from "react-router";
import { AuthButton } from "../components/AuthButton";
import { HeaderImage } from "../components/HeaderImage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";
import { useState } from "react";
import { User } from "../models/User";
import { loginUser } from "../reducers/UserSlice";
import { Togglepage } from "../components/TogglePage";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [loginFailed, setLoginFailed] = useState(false);

  const initialUserState = {
    fullName: "",
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);

  // Handles changes in form input fields and updates local state
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // handles user login
  const handleUserLogin = () => {
    const newUser: User = {
      ...user,
    };
    dispatch(loginUser(newUser)).then(() => {
      setUser(initialUserState);
      navigate("/home");
    });
    navigate("/");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginFailed(false);
    handleUserLogin();
  };

  // handles toggle for the register page
  const handleToggle = () => {
    navigate("/register");
  };
  return (
    <div>
      <HeaderImage />
      <form
        className="bg-slate-100 max-w-xl  w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 sm:p-8 rounded-2xl"
        onSubmit={handleLogin}
      >
        <div className="mb-12">
          <h3 className="text-gray-800 text-3xl text-center font-bold">
            Flavor Exchange Login
          </h3>
        </div>

        <div>
          <label className="text-gray-800 text-xs block mb-2 mt-4">
            Username
          </label>
          <div className="relative flex items-center">
            <input
              name="username"
              type="text"
              value={user.username}
              onChange={handleChange}
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-green-500 pl-2 pr-8 py-3 outline-none"
              placeholder="Enter username"
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="text-gray-800 text-xs block mb-2">Password</label>
          <div className="relative flex items-center">
            <input
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-green-500 pl-2 pr-8 py-3 outline-none"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div className="mt-8">
          <AuthButton handleClick={handleUserLogin}>Login</AuthButton>
          <Togglepage onClick={handleToggle}>Register Here</Togglepage>
        </div>
      </form>
    </div>
  );
}
