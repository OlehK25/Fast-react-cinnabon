import Button from "../../ui/Button.jsx";
import { deleteItem } from "./cartSlice.js";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
function DeleteItem({ cinnabonId, children }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(cinnabonId))}>
      {children}
    </Button>
  );
}

export default DeleteItem;
