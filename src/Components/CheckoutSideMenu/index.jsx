import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.2023",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    // setCount(0);
  };

  return (
    <>
      {isCheckoutSideMenuOpen && (
        <aside className=" w-full flex flex-col fixed right-0 border border-black rounded-lg bg-white md:w[260px] lg:w-[360px] lg:h-[calc(100vh-80px)] lg:top-[58px]">
          <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">My Order</h2>
            <div
              className="cursor-pointer"
              onClick={() => closeCheckoutSideMenu()}
            >
              <XMarkIcon className="h-6 w-6 text-black" />
            </div>
          </div>
          <div className="px-6 overflow-y-scroll flex-1">
            {cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.images}
                handleDelete={handleDelete}
              />
            ))}
          </div>
          <div className="px-6 mb-6">
            <p className="flex justify-between items-center mb-2.5">
              <span className="font-light">Total:</span>
              <span className="font-medium text-2xl">
                ${totalPrice(cartProducts)}
              </span>
            </p>
            <button
              className="w-full bg-black text-white py-3 rounded-lg"
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          </div>
        </aside>
      )}
    </>
  );
};

export default CheckoutSideMenu;
