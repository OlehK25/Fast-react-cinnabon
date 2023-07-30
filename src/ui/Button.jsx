import { Link } from "react-router-dom";

/* eslint-disable react/prop-types*/
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full " +
    "bg-yellow-400 font-semibold uppercase " +
    "tracking-wide text-stone-800 transition-colors " +
    "duration-300 hover:bg-yellow-300 focus:bg-yellow-300 " +
    "focus:outline-none focus:ring focus:ring-yellow-300 " +
    "focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    position: base + " px-4 py-[11px] md:px-5 md:py-[15px] text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-400 " +
      "font-semibold uppercase tracking-wide text-stone-400 " +
      "transition-colors duration-300 hover:bg-stone-400 " +
      "hover:text-stone-700 focus:bg-stone-400 focus:text-stone-700 focus:outline-none focus:ring " +
      "focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed " +
      "px-4 py-2.5 md:px-6 md:py-3.5",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
