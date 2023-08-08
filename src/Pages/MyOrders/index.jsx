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
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      {order.map((order, index) => (
        <Link
          key={order.id + index}
          to={`/my-orders/${index}`}
          
        >
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
