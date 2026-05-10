import React, { useState } from "react";
import { user } from "../data/user.js";
import { IoIosLogIn } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [initialData] = useState({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState(initialData);

  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchUser = user.find(
      (user) =>
        user.email === formData.email && user.password === formData.password,
    );

    if (matchUser) {
      localStorage.setItem("user", JSON.stringify(matchUser));
      alert("Login successful!");
      navigate("/");
      setFormData(initialData);
      window.location.reload();
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100  ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-orange-100">
        <div className="bg-orange-500 py-5 text-center ">
          <h1 className="text-3xl font-extrabold text-white flex items-center justify-center gap-2 ">
            <IoIosLogIn size={28} />
            TopStore
          </h1>
          <p className="text-orange-100 mt-2">
            Welcome back! Please login to your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className=" p-8    space-y-6 ">
          <div className="flex flex-col w-full">
            <label
              className="text-sm font-semibold text-gray-700 ml-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your Email Address"
              name="email"
              value={formData.email}
              onChange={handleFormData}
              className="border-2 w-full py-1 px-4 text-xl rounded-md hover:border-blue-700"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className="text-sm font-semibold text-gray-700 ml-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              value={formData.password}
              onChange={handleFormData}
              className="border-2 w-full py-1 px-4 text-xl rounded-md hover:border-blue-700"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white text-xl font-bold py-2 w-full rounded-xl cursor-pointer hover:bg-green-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
