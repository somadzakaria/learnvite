import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        name="fullname"
        type="text"
        placeholder="Jhon Doe"
        title="Fullname"
      ></InputForm>
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
      <InputForm
        name="re_password"
        type="password"
        placeholder="***"
        title="Re-Type Password"
      ></InputForm>
      <Button classname="bg-blue-600 text-white font-semibold w-full">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
