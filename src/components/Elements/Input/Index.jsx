import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { title, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name} title={title}>{title}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;
