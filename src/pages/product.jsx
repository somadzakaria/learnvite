import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";
import getProduct from "../service/product.service";
import authService from "../service/auth.service";

// const products = [
//   {
//     id: 1,
//     name: "Sepatu Adidas",
//     price: "500000",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt dolor ipsa alias maxime in?",
//     urlImage: "/images/img1.jpg",
//     alt: "product",
//   },
//   {
//     id: 2,
//     name: "Sepatu Nike",
//     price: "500000",
//     description: "Lorem ipsum dolor sit amet.",
//     urlImage: "/images/img1.jpg",
//     alt: "product",
//   },
//   {
//     id: 3,
//     name: "Sepatu Nike",
//     price: "500000",
//     description: "Lorem ipsum dolor sit amet.",
//     urlImage: "/images/img1.jpg",
//     alt: "product",
//   },
//   {
//     id: 4,
//     name: "Sepatu Nike",
//     price: "500000",
//     description: "Lorem ipsum dolor sit amet.",
//     urlImage: "/images/img1.jpg",
//     alt: "product",
//   },
// ];

const token = localStorage.getItem("token");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPricess, setTotalPricess] = useState(0);
  const [products, setProducst] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);

    if (!token) {
      window.location.href = "/login";
    } else {
      setUsername(authService.getUsername(token));
    }
  }, []);

  useEffect(() => {
    getProduct((data) => {
      setProducst(data);
    });

    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const dataProduct = products.find((product) => product.id === item.id);

        return acc + dataProduct.price * item.qty;
      }, 0);
      setTotalPricess(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleToCard = (id) => {
    if (cart.find((products) => products.id === id)) {
      setCart(
        cart.map((products) =>
          products.id === id
            ? {
                ...products,
                qty: products.qty + 1,
              }
            : products
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const totalPricesRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPricesRef.current.style.display = "table-row";
    } else {
      totalPricesRef.current.style.display = "none";
    }
  });

  return (
    <Fragment>
      <div className="flex justify-end bg-sky-400 px-10 items-center text-white h-20">
        {username}
        <Button classname="bg-slate-900 ml-4" onClick={handleLogout}>
          LOGOUT
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((e) => {
              return (
                <CardProduct key={e.id}>
                  <CardProduct.Header urlImage={e.image} alt={e.title} />
                  <CardProduct.Body title={e.title}>
                    {e.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={e.price}
                    id={e.id}
                    onClick={handleToCard}
                  />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-400 mb-2 ml-5">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>No</th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item, index) => {
                  const dataProduct = products.find(
                    (products) => products.id === item.id
                  );

                  const prices = Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "USD",
                  }).format(dataProduct.price);

                  const pricesTotal = Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.qty * dataProduct.price);
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{dataProduct.title.substring(0, 10)}...</td>
                      <td>{prices}</td>
                      <td>{item.qty}</td>
                      <td>{pricesTotal}</td>
                    </tr>
                  );
                })}
              <tr ref={totalPricesRef}>
                <td colSpan={4}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "USD",
                    }).format(totalPricess)}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
