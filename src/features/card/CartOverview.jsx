import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className='bg-stone-800 px-4 py-4 sm:px-6 md:text-base text-sm uppercase text-stone-200 p-4 flex items-center justify-between'>
      <p className='text-stone-300 sm:space-x-6 font-semibold space-x-4'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;