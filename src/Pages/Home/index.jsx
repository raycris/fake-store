import { useContext } from "react";

import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../context";

const Home = () => {
  const { items, setSearchByTitle, searchByTitle, filteredItems } =
    useContext(ShoppingCartContext);

  const renderView = () => {
    const itemsToRender = searchByTitle?.length > 0 ? filteredItems : items;

    if (itemsToRender?.length > 0) {
      return itemsToRender.map((item) => <Card key={item.id} data={item} />);
    } else {
      return <p>No Results Found</p>;
    }
  };
  
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="search a produt"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid grid-cols-1 place-items-center gap-2 min-w-[280p] w-full md:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
