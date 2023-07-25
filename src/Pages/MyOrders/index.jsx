import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../context";


const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex flex-col w-80">
        {order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.images}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrders;
