//React Router imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Components imports
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";

//I'll define myroutes inisde this creteBrowserRouter function
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order/new", element: <CreateOrder /> },
  { path: "/order/:orderId", element: <Order /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
