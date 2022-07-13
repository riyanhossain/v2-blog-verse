import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import VerifyOTP from "./components/Register/VerifyOTP";
import BlogByCategory from "./components/BlogByCategory/BlogByCategory";
import SingleBlog from "./components/SingleBlog/SingleBlog";
import SearchBlogLayout from "./components/BlogBySearch/SearchBlogLayout";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import { reducer, initialState } from "./State/State";
import { createContext, useReducer } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyBlogsLayout from "./components/MyBlogs/MyBlogsLayout";
export const UserContex = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <UserContex.Provider value={[state, dispatch]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/category/:category" element={<BlogByCategory />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/search/:search" element={<SearchBlogLayout />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="myblogs" element={<MyBlogsLayout />} />
          </Route>
        </Routes>
      </UserContex.Provider>
    </div>
  );
}

export default App;
