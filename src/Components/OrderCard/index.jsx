
import { XMarkIcon } from "@heroicons/react/24/outline";

const OrderCard = (props) => {
  const { title, imageUrl, price } = props;
  return (
    <section className="flex justify-between items-center mb-3">
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
        <XMarkIcon className="h-6 w-6 text-black" />
      </div>
    </section>
  );
};

export default OrderCard;
