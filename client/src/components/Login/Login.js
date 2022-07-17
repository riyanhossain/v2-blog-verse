import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContex } from "../../App";

export default function Login() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContex);
  const [inputs, setInputs] = useState({});
  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const setUser = async () => {
    try {
      const res = await axios.post(
        "https://new-blog-verse.herokuapp.com/api/v1/users/login",
        inputs
      );
      if (res.data.user) {
        dispatch({
          type: "SET_USER",
          payload: {
            user: res.data.user,
            token: res.data.access_token,
            isSignIn: true,
            isLoading: false,
          },
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    setUser();
  };
  console.log(state);
  return (
    <section
      className="flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 3.5rem)" }}
    >
      <div className="w-[36rem] h-96 bg-white flex flex-col justify-center items-center mb-14">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form
          className="flex flex-col justify-center items-center w-10/12 gap-y-8"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="email"
            onChange={handleInputs}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="password"
            onChange={handleInputs}
            required
          />
          <input
            type="submit"
            value="Login"
            className="w-full bg-[#029FAE] p-2 font-semibold text-white"
          />
        </form>
      </div>
    </section>
  );
}
