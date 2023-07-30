import PropTypes from "prop-types";
// import { XMarkIcon } from "@heroicons/react/24/outline";

const OrdersCard = (props) => {
  OrdersCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    handleDelete: PropTypes.array,
  };
  const { totalPrice, totalProducts } = props;
  return (
    <section className="flex justify-between items-center mb-6 border border-black">
      <p>
        <span>01.02.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </section>
  );
};

export default OrdersCard;
