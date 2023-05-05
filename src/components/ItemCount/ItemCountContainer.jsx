import React, { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  //Logica contador
  const [quantity, setQuantity] = useState(0);

  const addedToCartToast = () =>
    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  useEffect(() => {
    setQuantity(initial);
  }, [initial]);

  function add() {
    quantity < stock ? setQuantity(quantity + 1) : alert("Stock máximo");
  }

  function substract() {
    setQuantity(quantity - 1);
  }
  return (
    <ItemCount
      stock={stock}
      add={add}
      substract={substract}
      quantity={quantity}
      onAdd={onAdd}
      addedToCartToast={addedToCartToast}
    />
  );
};

export default ItemCountContainer;
