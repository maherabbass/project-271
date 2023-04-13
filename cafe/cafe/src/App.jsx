import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import Store from "./pages/Store";
import CartProvider from "./cartContext";
import { Container } from "react-bootstrap";

function App() {
  return (
    <CartProvider>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route exact caseSensitive={false} path="/" element={<Main />} />
          </Routes>
          <Routes>
            <Route
              exact
              caseSensitive={false}
              path="/login"
              element={<Login />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              caseSensitive={false}
              path="/menu"
              element={<Store />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              caseSensitive={false}
              path="/cart"
              element={<Cart />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              caseSensitive={false}
              path="/cancel"
              element={<Cancel />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              caseSensitive={false}
              path="/success"
              element={<Success />}
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
