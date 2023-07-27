import { getMenu } from "../../services/apiRestaurant.js";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
/*eslint-disable  react-refresh/only-export-components*/
export async function loader() {
  return await getMenu();
}

export default Menu;
