import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } =
    useContext(ShoppingCartContext);

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
        </aside>
      )}
    </>
  );
};

export default CheckoutSideMenu;
