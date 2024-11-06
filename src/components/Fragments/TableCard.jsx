import { useState, useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";

const TableCard = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const dataProduct = products.find((product) => product.id === item.id);

        return acc + dataProduct.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPricesRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPricesRef.current.style.display = "table-row";
    } else {
      totalPricesRef.current.style.display = "none";
    }
  });

  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-5 ${
        isDarkMode && "text-white"
      }`}
    >
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
              {/* {total} */}
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCard;
