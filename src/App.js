import {
  createBrowserRouter,
  //for old  way of defining routes
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/ErrorPage";
import ProductDetail from "./Pages/ProductDetail";

//another way (oldway) to define routes
// const routeDefenitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" elements={<Home />} />
//     <Route path="/products" elements={<Products />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefenitions);

// new way (object base solution) for defining routes
const router = createBrowserRouter([
  {
    // Absolute paths and relative paths
    // ABSOLUTE
    // path: "/",
    // element: <RootLayout />,
    // errorElement: <ErrorPage />,
    // children: [
    //   { path: "/", element: <Home /> },
    //   { path: "/products", element: <Products /> },

    //   // Defining and using dynamic Routes
    //   { path: "/products/:productId", element: <ProductDetail /> },

    //RELATIVE
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // index true means default route should be displayed if parent route is active  path: "/",
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },

      // Defining and using dynamic Routes
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
