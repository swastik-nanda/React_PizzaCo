import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home.jsx";
import Menu, { loader as menuLoader } from "./features/menu/Menu.jsx";
import { loader as orderLoader } from "./features/order/Order.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder.jsx";
import Order from "./features/order/Order.jsx";
import AppLayout from "./UI/AppLayout.jsx";
import Error from "./UI/Error.jsx";
import { action as updateOrderAction } from "./features/order/UpdateOrder.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
        loader: menuLoader,
        errorElement: <Error></Error>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/order/:orderID",
        element: <Order></Order>,
        loader: orderLoader,
        errorElement: <Error></Error>,
        action: updateOrderAction,
      },
      {
        path: "/order/new",
        element: <CreateOrder></CreateOrder>,
        action: createOrderAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
