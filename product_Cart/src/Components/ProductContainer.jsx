const ProductContainer = () => {
    return (
      <div className="w-full lg:w-2/3 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" id="lws-productContainer">
          {/* Product Card 1 */}
          <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 lws-productCard">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://images.pexels.com/photos/4427816/pexels-photo-4427816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
            />
            <div className="p-4 space-y-2">
              <h4 className="text-lg font-bold lws-productName">Spring and Summer Shoes</h4>
              <p className="text-gray-600 lws-productCategory">Mens Shoes</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-blue-600">BDT <span className="lws-price">400</span></p>
                <p className="text-sm">QTY: <span className="lws-quantity">10</span></p>
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                Add To Cart
              </button>
            </div>
          </div>
  
          {/* Product Card 2 */}
          <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 lws-productCard">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://images.pexels.com/photos/67800/shoes-depend-leash-sky-67800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
            />
            <div className="p-4 space-y-2">
              <h4 className="text-lg font-bold lws-productName">Women Winter Clothes</h4>
              <p className="text-gray-600 lws-productCategory">Tops</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-blue-600">BDT <span className="lws-price">100</span></p>
                <p className="text-sm">QTY: <span className="lws-quantity">30</span></p>
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductContainer;
  