import PropTypes from "prop-types";

const OrdersCard = (props) => {
  
  OrdersCard.propTypes = {
    totalPrice: PropTypes.number,
    totalProducts: PropTypes.number,
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
