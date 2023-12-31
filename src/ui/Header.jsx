import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-8 border-slate-500 bg-[#9DB2BF] px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast React Cinnabon Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
