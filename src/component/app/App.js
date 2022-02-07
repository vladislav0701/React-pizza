import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import MainPage from "../../pages/MainPage";
import Cart from "../cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
