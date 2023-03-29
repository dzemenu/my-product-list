import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="px-20  flex flex-col justify-between bg-slate-100">
      <ProductList />
      <div className="sticky bottom-0 right-0 h-16 w-26"><button className="btn gap-2">
  Add New item
 
</button></div>
    </div>
  );
}

export default App;
