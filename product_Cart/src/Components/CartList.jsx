
import CartItem from './CartItem';
import BillDetails from './BillDetails';


const CartList = () => {
  return (
   <>
   
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <CartItem />
        
          {/* Add more CartItem components as needed */}
        </div>
        {/* Bill Details */}
        <BillDetails />
      </div>
    </div>
    </>
  );
};

export default CartList;
