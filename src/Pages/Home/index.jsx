import { useEffect, useState } from "react";

import Card from "../../Components/Card";
import Layout from "../../Components/Layout";

const Home = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid grid-cols-1 place-items-center gap-2 min-w-[280p] w-full md:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {items?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
