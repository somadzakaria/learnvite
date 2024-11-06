import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button/Index";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const NavbarPage = () => {
  const { isDarkMode, setDarkMode } = useContext(DarkMode);

  const [totalCart, setTotalCart] = useState(0);
  const username = useLogin();

  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end bg-sky-400 px-10 items-center text-white h-20">
      {username}
      <Button classname="bg-slate-900 ml-4" onClick={handleLogout}>
        LOGOUT
      </Button>

      <div className="flex items-center bg-gray-800 rounded-md ml-5 p-2 mr-5">
        {totalCart}
      </div>

      <Button
        classname="bg-black px-10 m-5 text-white rounded"
        onClick={() => {
          setDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default NavbarPage;
