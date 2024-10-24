import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4">
      <div className="flex items-center space-x-6">
        {/* Cart Image */}
        <img className="w-24 h-24 rounded-lg object-cover" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
        {/* Cart Item Info */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-gray-800">Product Name</h4>
          <p className="text-sm text-gray-600">Category</p>
          <p className="text-md font-medium text-gray-800">BDT <span>1100</span></p>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        {/* Amount Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-lg text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faMinus} /> {/* Minus Icon */}
          </button>
          <span className="font-semibold text-lg">2</span>
          <button className="text-lg text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faPlus} /> {/* Plus Icon */}
          </button>
        </div>
        {/* Price */}
        <p className="text-lg font-bold text-blue-600">BDT <span>2200</span></p>
        {/* Delete Button */}
        <button className="text-lg text-red-400 hover:text-red-600">
          <FontAwesomeIcon icon={faTrash} /> {/* Trash Icon */}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
