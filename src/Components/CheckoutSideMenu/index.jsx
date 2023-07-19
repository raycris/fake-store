import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts } =
    useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredProducts)
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
          <div className="px-6 overflow-y-scroll">
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
        </aside>
      )}
    </>
  );
};

export default CheckoutSideMenu;
