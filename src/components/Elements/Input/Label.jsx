const Label = (props) => {
  const { htmlfor, title } = props;

  return (
    <label
      htmlFor={htmlfor}
      className={`block text-slate-700 text-sm font-bold mb-2`}
    >
      {title}
    </label>
  );
};

export default Label;
