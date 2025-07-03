import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import LinkButton from "../../UI/LinkButton";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  if (!cart.length) {
    return <EmptyCart></EmptyCart>;
  }

  return (
    <div className="py-3 px-4">
      <LinkButton
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item, index) => (
          <CartItem key={index} item={item}></CartItem>
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
