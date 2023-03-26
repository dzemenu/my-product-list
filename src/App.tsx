import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="px-20  flex flex-col justify-between ">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
