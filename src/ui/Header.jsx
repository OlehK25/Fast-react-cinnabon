import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";

function Header() {
  return (
    <header className='flex items-center justify-between bg-yellow-500 sm:px-6 uppercase px-4 py-3 border-b-8 border-stone-500'>
      <Link className='tracking-widest' to="/">Fast React Pizza Co.</Link>

      <SearchOrder />

        <Username />
    </header>
  );
}

export default Header;
