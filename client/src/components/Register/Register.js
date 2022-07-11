import React from "react";

export default function Register() {
  return (
    <section
      className="flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 3.5rem)" }}
    >
      <div className="w-[36rem] h-96 bg-white flex flex-col justify-center items-center mb-14">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <form
          className="flex flex-col justify-center items-center w-10/12 gap-y-8"
          //   onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="name"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="name"
            required
            name="name"
            // onChange={handleInputs}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="email"
            // onChange={handleInputs}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="password"
            // onChange={handleInputs}
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
