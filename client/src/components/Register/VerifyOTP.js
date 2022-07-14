import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';

export default function VerifyOTP() {
  const navigate = useNavigate();
    const { emaill } = useParams();
    const [otp, setOtp] = React.useState('');
    const handleInputs = (e) => {
        setOtp(e.target.value);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await axios.post(`http://localhost:5000/api/v1/users/verify-otp`, {otp, emaill});
            message.success('OTP verified successfully');
            navigate(`/login`);
        }catch(err){
            message.error(err.response.data.message);
        }
    }
  return (
    <section
    className="flex justify-center items-center"
    style={{ minHeight: "calc(100vh - 3.5rem)" }}
  >
    <div className="w-[36rem] h-96 bg-white flex flex-col justify-center items-center mb-14">
      <h1 className="text-3xl font-bold mb-4">OTP</h1>
      <form
        className="flex flex-col justify-center items-center w-10/12 gap-y-8"
          onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="otp"
          className="w-full bg-[#F0F2F3] p-2"
          autoComplete="otp"
          required
          name="otp"
          onChange={handleInputs}
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
