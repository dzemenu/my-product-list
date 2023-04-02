import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="  flex flex-col justify-between bg-slate-100">
      <Header />
      <div className="px-20">
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ProductList />}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
