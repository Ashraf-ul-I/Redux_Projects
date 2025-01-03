import { useDispatch } from "react-redux";
import ProductContainer from "./ProductContainer";
import { useState } from "react";
import { addproduct } from "../redux/products/action.js"; // import your addProduct action
import { v4 as uuidv4 } from 'uuid';
const Products = () => {
  const dispatch = useDispatch();
 
  const [isProduct, setProduct] = useState({
    productName: '',
    category: '',
    imageUrl: '',
    price: '',
    quantity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleAddProducts = (e) => {
    e.preventDefault();
    const newProduct = { ...isProduct, id: uuidv4() };

    dispatch(addproduct(newProduct)); // dispatch add product action
    setProduct({ // reset form fields after adding
      productName: '',
      category: '',
      imageUrl: '',
      price: '',
      quantity: '',
      cartQuantity:''
    });
  };

  return (
    <div className="container mx-auto my-8 shadow-lg bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:space-x-8">  
        {/* Product Container */}
        <ProductContainer />
        {/* End Product Container */}

        <div className="w-full lg:w-1/3 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          <h4 className="text-xl font-bold mb-6 text-gray-800">Add New Product</h4>
          <form className="space-y-6 text-gray-600" id="lws-addProductForm" onSubmit={handleAddProducts}>
            <div className="space-y-2">
              <label htmlFor="lws-inputName" className="block text-sm font-medium">Product Name</label>
              <input
                name="productName"
                value={isProduct.productName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="lws-inputName"
                type="text"
                placeholder="Enter product name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory" className="block text-sm font-medium">Category</label>
              <input
                name="category"
                value={isProduct.category}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="lws-inputCategory"
                type="text"
                placeholder="Enter product category"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputImage" className="block text-sm font-medium">Image URL</label>
              <input
                name="imageUrl"
                value={isProduct.imageUrl}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="lws-inputImage"
                type="text"
                placeholder="Enter image URL"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6 pb-4">
              <div className="space-y-2">
                <label htmlFor="lws-inputPrice" className="block text-sm font-medium">Price</label>
                <input
                  name="price"
                  value={isProduct.price}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  id="lws-inputPrice"
                  placeholder="Enter price"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity" className="block text-sm font-medium">Quantity</label>
                <input
                  name="quantity"
                  value={isProduct.quantity}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  id="lws-inputQuantity"
                  placeholder="Enter quantity"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Products;
