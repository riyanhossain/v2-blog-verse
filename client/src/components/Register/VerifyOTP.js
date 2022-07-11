import React from 'react'

export default function VerifyOTP() {
    //useparams to get email address from url
  return (
    <section
    className="flex justify-center items-center"
    style={{ minHeight: "calc(100vh - 3.5rem)" }}
  >
    <div className="w-[36rem] h-96 bg-white flex flex-col justify-center items-center mb-14">
      <h1 className="text-3xl font-bold mb-4">OTP</h1>
      <form
        className="flex flex-col justify-center items-center w-10/12 gap-y-8"
        //   onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="otp"
          className="w-full bg-[#F0F2F3] p-2"
          autoComplete="otp"
          required
          name="otp"
          // onChange={handleInputs}
        />
        <input
          type="submit"
          value="Submit"
          className="w-full bg-[#029FAE] p-2 font-semibold text-white"
        />
      </form>
    </div>
  </section>
  )
}
