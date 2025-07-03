import Button from "../../UI/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
import { useDispatch } from "react-redux";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-medium gap-2">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
