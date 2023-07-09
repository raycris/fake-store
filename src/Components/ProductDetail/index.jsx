import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context";

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail } =
    useContext(ShoppingCartContext);
    
  return (
    <>
      {isProductDetailOpen && (
        <aside className=" w-full flex flex-col fixed right-0 border border-black rounded-lg bg-white md:w[260px] lg:w-[360px] lg:h-[calc(100vh-80px)] lg:top-[58px]">
          <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <div onClick={() => closeProductDetail()}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default ProductDetail;
