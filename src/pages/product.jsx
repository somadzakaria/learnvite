import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Adidas",
    price: "Rp. 500.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt dolor ipsa alias maxime in?",
    urlImage: "/images/img1.jpg",
    alt: "product",
  },
  {
    id: 2,
    name: "Sepatu Nike",
    price: "Rp. 500.000.000",
    description: "Lorem ipsum dolor sit amet.",
    urlImage: "/images/img1.jpg",
    alt: "product",
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center">
      {products.map((e) => {
        return (
          <CardProduct key={e.id}>
            <CardProduct.Header urlImage={e.urlImage} alt={e.alt} />
            <CardProduct.Body title={e.name}>{e.description}</CardProduct.Body>
            <CardProduct.Footer price={e.price} />
          </CardProduct>
        );
      })}
    </div>
  );
};

export default ProductPage;
