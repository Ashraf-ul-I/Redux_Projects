import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/products/action";
import { v4 as uuidv4 } from 'uuid';
const ProductContainer = () => {
  const product=useSelector(state=>state.products.products);
  const cartItems=useSelector(state=>state.products.cartItems);
  const dispatch=useDispatch()
  const handleAddToCart = (item) => {
    const newProduct = { ...item, cartId: uuidv4() }
    dispatch(addToCart(newProduct));
};
const newQuantity=cartItems.map((item)=>item.cartQuantity);
  
 
  
    return (
      <div className="w-full lg:w-2/3 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" id="lws-productContainer">
        {product.map((item) => {
         
        return (
           
          <div
            key={item.name}
            className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 lws-productCard"
          >
            <img
              className="w-full h-48 object-cover rounded-lg"
              src={item.imageUrl}
              alt="product"
            />
            <div className="p-4 space-y-2">
              <h4 className="text-lg font-bold lws-productName">{item.productName}</h4>
              <p className="text-gray-600 lws-productCategory">{item.category}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-blue-600">
                  BDT <span className="lws-price">{item.price}</span>
                </p>
                <p className="text-sm">
                  QTY: <span className="lws-quantity">{item.quantity-newQuantity}</span>
                </p>
                
              </div>
              <button
                onClick={() => handleAddToCart(item,item.id)}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Add To Cart
              </button>
            </div>
          </div>
        )})}
     
      
        </div>
      </div>
    );
  };
  
  export default ProductContainer;
  