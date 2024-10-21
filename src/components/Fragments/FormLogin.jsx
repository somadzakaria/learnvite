import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="email"
        type="email"
        placeholder="example@mail.com"
        title="Email Address"
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
    </form>
  );
};

export default FormLogin;
