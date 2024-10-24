

const BillDetails = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h4 className="text-xl font-bold text-center mb-6">Bill Details</h4>
      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Sub Total</p>
          <p className="font-semibold text-gray-800">BDT <span className="lws-subtotal">8800</span></p>
        </div>
        {/* Discount */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Discount</p>
          <p className="font-semibold text-gray-800">BDT <span className="lws-discount">0</span></p>
        </div>
        {/* VAT */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">VAT</p>
          <p className="font-semibold text-gray-800">BDT <span className="vat">0</span></p>
        </div>
        {/* Total */}
        <div className="flex justify-between items-center border-t pt-4">
          <p className="font-bold text-lg">TOTAL</p>
          <p className="font-bold text-lg text-blue-600">BDT <span className="lws-total">8800</span></p>
        </div>
        {/* Place Order Button */}
        <button className="w-full bg-green-600 text-white py-3 rounded-md mt-4 hover:bg-green-700 transition">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BillDetails;
