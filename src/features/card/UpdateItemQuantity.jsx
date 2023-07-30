import Button from "../../ui/Button.jsx";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice.js";

/* eslint-disable react/prop-types */
function UpdateItemQuantity({ cinnabonId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(cinnabonId))}
      >
        -
      </Button>

      <span className="text-sm font-medium">{currentQuantity}</span>

      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(cinnabonId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
