import React from "react";
import { Row, Col } from "react-bootstrap";
import { itemsArray } from "../productsMenu";
import ItemCard from "./component/ItemCard";
import NavbarComponent from "./component/Navbar";

const Store = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <h1 align="center" className="p-3">
        Welcome to our Store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {itemsArray.map((item, idx) => (
          <Col align="center" key={idx}>
            <ItemCard item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
