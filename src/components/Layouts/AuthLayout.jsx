import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => {
            setDarkMode(!isDarkMode);
          }}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-400">{title}</h1>
        <p className="font-medium text-slate-400 mt-5">
          Lorem ipsum dolor sit amet.
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login" ? "Don't have account " : "Have a account "}
          {type === "login" ? (
            <Link to="/register" className="font-bold text-blue-500">
              Sign Up
            </Link>
          ) : (
            <Link to="/login" className="font-bold text-blue-500">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
