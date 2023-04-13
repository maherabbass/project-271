import React from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../cartContext";
import { useContext } from "react";
import { getItemData } from "../../productsMenu";
import "../../assets/css/style.css";

const CartItem = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const itemData = getItemData(id);

  return (
    <>
      <img src={itemData.img} />
      <h3>{itemData.title}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * itemData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  );
};

export default CartItem;
