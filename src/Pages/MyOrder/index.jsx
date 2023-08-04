import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

import { ShoppingCartContext } from "../../context";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  const location = useLocation();
  let index = location.pathname.substring(location.pathname.lastIndexOf("/")+1)
  if(index === "last") index = order?.length - 1;
  return (
    <Layout>
      <div className="flex relative justify-center items-center w-80">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {order?.[index]?.products.map((product) => (
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

export default MyOrder;
