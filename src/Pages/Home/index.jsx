import { useContext } from "react";

import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../context";

const Home = () => {
  const { items, setSearchByTitile } = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="search a produt"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitile(event.target.value)}
      />
      <div className="grid grid-cols-1 place-items-center gap-2 min-w-[280p] w-full md:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {items?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
