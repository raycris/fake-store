import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";

const OrderCard = (props) => {
  OrderCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    handleDelete: PropTypes.array,
  };
  const { id, title, imageUrl, price, handleDelete } = props;
  // let renderXMarkIcon;
  return (
    <section className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
          <p className="text-sm font-light">{title}</p>
        </figure>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {handleDelete && (
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => handleDelete(id)}
          />
        )}
      </div>
    </section>
  );
};

export default OrderCard;
