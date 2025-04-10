import { AuthButton } from "../components/AuthButton";
import { useNavigate } from "react-router";
import { HeaderImage } from "../components/HeaderImage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";
import { useState } from "react";
import { User } from "../models/User";
import { registerUser } from "../reducers/UserSlice";
import { Togglepage } from "../components/TogglePage";

// Register page
export function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [registerFailed, setRegisterFailed] = useState(false);

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
  // handles user register
  const handleRegisterUser = () => {
    const newUser: User = {
      ...user,
    };
    dispatch(registerUser(newUser)).then(() => {
      setUser(initialUserState);
      navigate("/home");
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegisterFailed(false);
    handleRegisterUser();
  };

  // handles toggle to the login page
  const handleToggle = () => {
    navigate("/");
  };

  return (
    <div>
      <HeaderImage />
      <form
        className="bg-slate-100 max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 sm:p-8 rounded-2xl"
        onSubmit={handleRegister}
      >
        <div className="mb-12">
          <h3 className="text-gray-800 text-3xl text-center font-bold">
            Flavor Exchange Register
          </h3>
        </div>
        <div>
          <label className="text-gray-800 text-xs block mb-2">FullName</label>
          <div className="relative flex items-center">
            <input
              name="fullName"
              type="text"
              value={user.fullName}
              onChange={handleChange}
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
              placeholder="Enter fullname"
            />
          </div>
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
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
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
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="mt-8">
          <AuthButton handleClick={handleRegisterUser}>Register</AuthButton>
          <Togglepage onClick={handleToggle}>Login Here</Togglepage>
        </div>
      </form>
    </div>
  );
}
