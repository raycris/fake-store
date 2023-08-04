import { ChevronRightIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const OrdersCard = (props) => {
  OrdersCard.propTypes = {
    totalPrice: PropTypes.number,
    totalProducts: PropTypes.number,
  };

  const { totalPrice, totalProducts } = props;
  return (
    <section className="flex justify-between items-center mb-6 border border-black w-80 p-4 rounded-lg ">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{totalProducts} article</span>
        </p>
        <p className="flex justify-stretch items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </p>
      </div>
    </section>
  );
};

export default OrdersCard;
