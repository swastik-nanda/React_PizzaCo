import { useSelector } from "react-redux";
import { formatCurrency } from "../../utilities/Helpers.jsx";
import DeleteItem from "./DeleteItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";
import { getCurrentQuantityById } from "./cartSlice.js";
function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          id={id}
          currentQuantity={currentQuantity}
        ></UpdateItemQuantity>
        <DeleteItem id={id}></DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
