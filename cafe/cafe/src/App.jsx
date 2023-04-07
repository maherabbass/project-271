import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact caseSensitive={false} path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact caseSensitive={false} path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
