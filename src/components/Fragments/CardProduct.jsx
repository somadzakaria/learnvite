import Button from "../Elements/Button/Index";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-400 border border-gray-200 rounded-lg shadow m-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { urlImage, alt } = props;
  return (
    <a href="#">
      <img src={urlImage} alt={alt} className="p-8 rounded-t-md" />
    </a>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-5 pb-5 h h-full">
      <a href="#">
        <h5 className="text-xl text-white font-semibold tracking-tight">
          {title}
        </h5>
        <p className="text-m text-white">{children}</p> 
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600 text-white" title="Add To Cart" />
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;