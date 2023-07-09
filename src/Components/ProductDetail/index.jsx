import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context";

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext);

  return (
    <>
      {isProductDetailOpen && (
        <aside className=" w-full flex flex-col fixed right-0 border border-black rounded-lg bg-white md:w[260px] lg:w-[360px] lg:h-[calc(100vh-80px)] lg:top-[58px]">
          <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <div className="cursor-pointer" onClick={() => closeProductDetail()}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </div>
          </div>
          <figure className="px-6">
            <img
              className="w-full h-full rounded-lg"
              src={productToShow.images[0]}
              alt={productToShow.title}
            />
          </figure>
          <p className="flex flex-col p-6">
            <span className="font-medium text-2xl mb-2">${productToShow.price}</span>
            <span className="font-medium text-md ">{productToShow.title}</span>
            <span className="font-light text-ms ">{productToShow.description}</span>
            </p>
        </aside>
      )}
    </>
  );
};

export default ProductDetail;
