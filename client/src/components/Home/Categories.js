import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const buttons = [
    "javascript",
    "dotnet",
    "csharp",
    "python",
    "dart",
    "kotlin",
    "html",
  ];
  return (
    <div className="w-48 flex flex-col justify-center">
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            className="font-semibold text-black p-2 w-48 rounded hover:bg-blue-100 "
            onClick={() => navigate(`/category/${button}`)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}
