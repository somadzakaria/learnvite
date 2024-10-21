const Button = (props) => {
  const {
    title = "TOSAA",
    classname,
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname}`}
      type="submit"
    >
      {title}
    </button>
  );
};

export default Button;
