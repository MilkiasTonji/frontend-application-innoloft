import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Product from './pages/Product';
import Home from './pages/Home'
import EditProduct from './pages/EditProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/edit",
    element: <EditProduct />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
