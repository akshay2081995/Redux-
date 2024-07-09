import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "../Features/Counter/CounterSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const newUser = useSelector((state) => state.counter.users);

  const submitsignin = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.warning("Password do not match", {
        autoClose: 2000,
      });
      return;
    }
    dispatch(
      adduser({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
    );
    navigate("/");
  };

  return (
    <div className="bg-white">
      <main className="container mx-auto px-4 py-[16.5px]">
        <section className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Sign in</span>
          </h1>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
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
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={submitsignin}
                className="w-full px-4 py-2 text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-green-400"
              >
                Sign In
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 REDUx. All rights reserved.</p>
      </footer>
    </div>
  );
};
