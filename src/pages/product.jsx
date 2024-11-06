import { Fragment, useContext, useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";
import productService from "../service/product.service";
import authService from "../service/auth.service";
import { useLogin } from "../hooks/useLogin";
import TableCard from "../components/Fragments/TableCard";
import NavbarPage from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductPage = () => {
  const { isDarkMode, setDarkMode } = useContext(DarkMode);

  const [products, setProducst] = useState([]);
  useLogin();

  useEffect(() => {
    productService.getProduct((data) => {
      setProducst(data);
    });
  }, []);

  return (
    <Fragment>
      <NavbarPage></NavbarPage>
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((e) => {
              return (
                <CardProduct key={e.id}>
                  <CardProduct.Header
                    urlImage={e.image}
                    alt={e.title}
                    id={e.id}
                  />
                  <CardProduct.Body title={e.title}>
                    {e.description}
                  </CardProduct.Body>
                  <CardProduct.Footer price={e.price} id={e.id} />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-400 mb-2 ml-5">Cart</h1>
          <TableCard products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
