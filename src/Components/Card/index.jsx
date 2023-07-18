import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context";

const Card = (data) => {
  const {
    setCount,
    count,
    openProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
  } = useContext(ShoppingCartContext);

  const showProduct = (ProductDetail) => {
    openProductDetail();
    setProductToShow(ProductDetail);
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.some((product) => product.id === id);


    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center rounded-full bg-black w-6 h-6 m-2 p-1">
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center rounded-full bg-white w-6 h-6 m-2 p-1"
          onClick={(event) => addProductToCart(event, data.data)}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </div>
      );
    }
  };

  return (
    <section
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </section>
  );
};

export default Card;
