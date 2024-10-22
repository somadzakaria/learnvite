import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { useEffect, useRef, useState } from "react";
import authService from "../../service/auth.service";

const FormLogin = () => {
  const [loginError, setLoginError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    authService.loginAuth(data, (status, res) => {
      if (status) {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        window.location.href = "/product";
      } else {
        setLoginError(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        type="text"
        placeholder="Jhon Doe"
        title="Username"
        ref={usernameRef}
      ></InputForm>
      <InputForm
        name="password"
        type="password"
        placeholder="***"
        title="Password"
      ></InputForm>
      <Button
        classname="bg-blue-600 text-white font-semibold w-full"
        type="submit"
      >
        Login
      </Button>
      {loginError && (
        <p className="text-sm text-red-500 text-center my-3">{loginError}</p>
      )}
    </form>
  );
};

export default FormLogin;
