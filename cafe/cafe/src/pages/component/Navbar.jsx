import React from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../../cartContext";
import CartItem from "./cartItem";
import "../../assets/css/style.css";

function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //checkout function that is called on the click of purchase button
  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const itemsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar className="nav">
        <h1 className="title">Menu</h1>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button className="cart" onClick={handleShow}>
            Cart ({itemsCount} Items)
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {itemsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentItem, idx) => (
                <CartItem
                  key={idx}
                  id={currentItem.id}
                  quantity={currentItem.quantity}
                  img={currentItem.img}
                ></CartItem>
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success" onClick={checkout}>
                Purchase Items!
              </Button>
              <Button variant="success" onClick={checkout}>
                Reserve Instead!
              </Button>
            </>
          ) : (
            <h1>Your cart is still empty!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
