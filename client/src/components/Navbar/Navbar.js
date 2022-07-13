import React, { useContext } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { UserContex } from "../../App";
import Navmenu from "./Navmenu";

export default function Navbar() {
  const [state, dispatch] = useContext(UserContex);

  return (
    <div className="flex justify-center items-center h-14 bg-white">
      <div className="w-[1200px] flex justify-between items-center">
        <div className="flex gap-x-4">
          <Link to="/" className="flex justify-center items-center">
            <h1 className="font-bold mb-0 text-black">BlogVerse</h1>
          </Link>
          <Search />
        </div>
        <div className="flex justify-center items-center">
          {!state.isSignIn ? (
            <ul className="flex justify-center items-center mb-0">
              <li>
                <Link to="/login">
                  <button className="font-semibold text-black p-2 w-16 rounded hover:bg-slate-100 ">
                    Login
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/register">
                  <button className="font-semibold p-2 w-32 rounded hover:bg-slate-100 ">
                    Create account
                  </button>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex justify-center items-center mb-0">
              <li>
              <Link to="/create-blog">
                <button className="font-semibold p-2 w-32 rounded hover:bg-slate-100 ">
                  Create Blog
                </button>
              </Link>
              </li>
              <Navmenu state={state} dispatch={dispatch}/>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
