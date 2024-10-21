import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
  return (
    <form action="">
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
        title="Login"
      />
    </form>
  );
};

export default FormLogin;
