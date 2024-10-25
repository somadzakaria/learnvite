import { useEffect, useState } from "react";
import authService from "../service/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUsername(authService.getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};
