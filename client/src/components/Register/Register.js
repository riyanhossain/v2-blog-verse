import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({});
  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const userRegister = async (e) => {
    try {
      const res = await axios.post(
        "/api/v1/users/register",
        inputs
      );
      if (res.data.message) {
        message.success(res.data.message);
        setIsLoading(false);
      }
      navigate(`/verify-otp/${inputs.email}`);
    } catch (err) {
      message.error(err.response.data.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    userRegister();
  };
  return isLoading ? (
    <Loading />
  ) : (
    <section
      className="flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 3.5rem)" }}
    >
      {isLoading && <Loading />}
      <div className="w-[36rem] h-96 bg-white flex flex-col justify-center items-center mb-14">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <form
          className="flex flex-col justify-center items-center w-10/12 gap-y-8"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="name"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="name"
            required
            name="name"
            onChange={handleInputs}
          />
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
            value="Register"
            className="w-full bg-[#029FAE] p-2 font-semibold text-white"
          />
        </form>
      </div>
    </section>
  );
}
