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
import UpdateBlog from "./components/UpdateBlog.js/UpdateBlog";
import NotFoundPage from "./components/NotFound/NotFoundPage";
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
          <Route path="/verify-otp/:email" element={<VerifyOTP />} />
          <Route path="/category/:category" element={<BlogByCategory />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/search/:search" element={<SearchBlogLayout />} />
          <Route path="/private/*" element={<PrivateRoute />}>
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="myblogs" element={<MyBlogsLayout />} />
            <Route path="edit-blog/:id" element={<UpdateBlog />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserContex.Provider>
    </div>
  );
}

export default App;
