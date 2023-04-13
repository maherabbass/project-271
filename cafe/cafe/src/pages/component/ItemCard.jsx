import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../cartContext";
import { useContext } from "react";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const ItemCard = (props) => {
  const item = props.item;
  const cart = useContext(CartContext);
  const itemQuantity = cart.getProductQuantity(item.id);
  console.log(cart.items);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <div className="card">
            <div className="cardBody">
              <img src={item.img} alt="item img" className="itemImage" />
              <div className="itemDetails">
                <h5>{item.name}</h5>
                <button className="flipButton" onClick={handleClick}>
                  i
                </button>
                <h5 className="price">${item.price}</h5>
              </div>

              {itemQuantity > 0 ? (
                <>
                  <div className="quantity-counter">
                    <Form.Label className="quantity" column="true" sm="6">
                      In Cart: {itemQuantity}
                    </Form.Label>
                    <button
                      className="smallButton"
                      onClick={() => cart.removeOneFromCart(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="smallButton"
                      onClick={() => cart.addOneToCart(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="bigButton"
                    onClick={() => cart.deleteFromCart(item.id)}
                  >
                    Remove from Cart
                  </button>
                </>
              ) : (
                <button
                  className="bigButton"
                  onClick={() => cart.addOneToCart(item.id)}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="cardBack">
          <p>{item.about}</p>
          <button className="flipButtonBack" onClick={handleClick}>
            i
          </button>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default ItemCard;
