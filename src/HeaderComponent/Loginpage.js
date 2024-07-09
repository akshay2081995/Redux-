import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userActive } from "../Features/Counter/CounterSlice";

export const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState();
  const dispatch = useDispatch();

  const loginData = useSelector((state) => state.counter.users);

  const navigate = useNavigate();
  const login = () => {
    const DataLogin = loginData.filter(
      (dta) => dta.email === email && dta.password === Password
    );
    if (DataLogin.length > 0) {
      dispatch(
        userActive(
          ...DataLogin
        )
      );
      navigate("/");
    } else {
      toast.error("data not match");
    }
  };

  return (
    <div className="bg-white">
      <main className="container mx-auto px-4 py-8">
        <section className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Log in</span>
          </h1>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email ID
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-green-700"
                onClick={login}
              >
                Log In
              </button>
            </div>
            <div className="flex justify-center gap-3">
              <h2>New Customer?</h2>
              <Link to={"/Signin"} className="text-blue-800 hover:underline">
                    Create New Account
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 mt-[164px]">
        <p>&copy; 2024 REDUx. All rights reserved.</p>
      </footer>
    </div>
  );
};
