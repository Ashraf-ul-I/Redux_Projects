import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

const CartItem = () => {
  const cartItems = useSelector(state => state.products.cartItems);
  const dispatch = useDispatch();

  // // Accumulate items by id
  // const uniqueItems = cartItems.reduce((acc, item) => {
  //   // Check if the item's ID is already in the accumulated list using includes
  //   const existingItem = acc.find(i => i.id === item.id);
    
  //   if (existingItem) {
  //     // If item exists, increase the count by 1 for each occurrence
  //     existingItem.cartQuantity += 1;
  //   } else {
  //     // If item does not exist, add it to the list with cartQuantity of 1
  //     acc.push({ ...item, cartQuantity: 1 });
  //   }
    
  //   return acc;
  // }, []);
  
  


  return (
    <>
      {cartItems.map((item) => (
        <div className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4" key={item.id}>
          <div className="flex items-center space-x-6">
            {/* Cart Image */}
            <img
              className="w-24 h-24 rounded-lg object-cover"
              src={item.imageUrl}
              alt="product"
            />
            {/* Cart Item Info */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">{item.productName}</h4>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="text-md font-medium text-gray-800">
                BDT <span>{item.price}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            {/* Amount Buttons */}
            <div className="flex items-center space-x-4">
              <button
                className="text-lg text-gray-600 hover:text-gray-900"
                onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}
              >
                <FontAwesomeIcon icon={faMinus} /> {/* Minus Icon */}
              </button>
              <span className="font-semibold text-lg">{item.cartQuantity}</span>
              <button
                className="text-lg text-gray-600 hover:text-gray-900"
                onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })}
              >
                <FontAwesomeIcon icon={faPlus} /> {/* Plus Icon */}
              </button>
            </div>
            {/* Price */}
            <p className="text-lg font-bold text-blue-600">
              BDT <span>{item.price*item.cartQuantity }</span>
            </p>
            {/* Delete Button */}
            <button
              className="text-lg text-red-400 hover:text-red-600"
              onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
            >
              <FontAwesomeIcon icon={faTrash} /> {/* Trash Icon */}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
