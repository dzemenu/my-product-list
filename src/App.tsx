import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="px-20  flex flex-col justify-between bg-slate-100">
<Header />
<Routes>
<Route path="/cart" element={<Cart />} />
        <Route path="/"  element={<ProductList />}>
        
         
        

          
         
        </Route>
      </Routes>
     
      <div className="sticky bottom-0 right-0 h-16 w-26"><button className="btn gap-2">
  Add New item
 
</button></div>
    </div>
  );
}

export default App;
