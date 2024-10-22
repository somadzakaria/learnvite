import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { title, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name} title={title}>
        {title}
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
      ></Input>
    </div>
  );
});

export default InputForm;
