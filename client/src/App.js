import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import VerifyOTP from "./components/Register/VerifyOTP";
import BlogByCategory from "./components/BlogByCategory/BlogByCategory";
import SingleBlog from "./components/SingleBlog/SingleBlog";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/verify-otp" element={<VerifyOTP/>} />
        <Route path="/category/:category" element={<BlogByCategory/>}/>
        <Route path="/blog/:id" element={<SingleBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;
