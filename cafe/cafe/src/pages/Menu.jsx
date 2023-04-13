import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/menu.css";
import { Container } from "react-bootstrap";

import icon1 from "../assets/images/tab-icon-01.png";
import icon2 from "../assets/images/tab-icon-02.png";
import icon3 from "../assets/images/tab-icon-03.png";
import item1 from "../assets/images/menu/item1.jfif";
import item2 from "../assets/images/menu-item-02.jpg";
import item3 from "../assets/images/menu-item-03.jpg";
import item4 from "../assets/images/menu-item-04.jpg";

const Menu = () => {
  return (
    <div className="body">
      <div className="menu">
        <div className="heading">
          <h1>AUB Cafe</h1>
          <h3>&mdash;Menu&mdash;</h3>
          <div className="meal">
            <ul>
              <li>
                <a>
                  <img src={icon1} alt="" />
                </a>
              </li>
              <li>
                <a>
                  <img src={icon2} alt="" />
                </a>
              </li>
              <li>
                <a>
                  <img src={icon3} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="food-items">
          <img src={item1} />
          <div className="details">
            <div className="details-sub">
              <h5>Burger</h5>
              <h5 className="price">$9</h5>
            </div>
            <p>About this food items. More details.....</p>
            <div className="quantity-counter">
              <button id="counter-decrement" className="decrement">
                -
              </button>
              <input
                id="counter-value"
                className="value"
                type="number"
                value="0"
              />
              <button id="counter-increment" className="increment">
                +
              </button>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>

        <div className="food-items">
          <img src={item2} />
          <div className="details">
            <div className="details-sub">
              <h5>Burger</h5>
              <h5 className="price">$9</h5>
            </div>
            <p>About this food items. More details.....</p>
            <div className="quantity-counter">
              <button id="counter-decrement" className="decrement">
                -
              </button>
              <input
                id="counter-value"
                className="value"
                type="number"
                value="0"
              />
              <button id="counter-increment" className="increment">
                +
              </button>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>

        <div className="food-items">
          <img src={item3} />
          <div className="details">
            <div className="details-sub">
              <h5>Burger</h5>
              <h5 className="price">$9</h5>
            </div>
            <p>About this food items. More details.....</p>
            <div className="quantity-counter">
              <button id="counter-decrement" className="decrement">
                -
              </button>
              <input
                id="counter-value"
                className="value"
                type="number"
                value="0"
              />
              <button id="counter-increment" className="increment">
                +
              </button>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>

        <div className="food-items">
          <img src={item4} />
          <div className="details">
            <div className="details-sub">
              <h5>Burger</h5>
              <h5 className="price">$9</h5>
            </div>
            <p>About this food items. More details.....</p>
            <div className="quantity-counter">
              <button id="counter-decrement" className="decrement">
                -
              </button>
              <input
                id="counter-value"
                className="value"
                type="number"
                value="0"
              />
              <button id="counter-increment" className="increment">
                +
              </button>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>

        <div className="food-items">
          <img src={item1} />
          <div className="details">
            <div className="details-sub">
              <h5>Burger</h5>
              <h5 className="price">$9</h5>
            </div>
            <p>About this food items. More details.....</p>
            <div className="quantity-counter">
              <button id="counter-decrement" className="decrement">
                -
              </button>
              <input
                id="counter-value"
                className="value"
                type="number"
                value="0"
              />
              <button id="counter-increment" className="increment">
                +
              </button>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
