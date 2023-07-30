import { useContext } from "react";
import { Link } from "react-router-dom";

import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";

import { ShoppingCartContext } from "../../context";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex relative justify-center items-center w-80 mb-6">
        <h1>MyOrders</h1>
      </div>
      {order.map((order) => (
        <Link key={order.id}  to={`/my-orders/${order.id}`} className="flex flex-col w-80">
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;
