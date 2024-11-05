import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./pages/layout/layout";
import Sales from "./pages/sales/sales";
import Purchase from "./pages/purchase/purchase";
import Home from "./pages/home/home";
import Finance from "./pages/finance/finance";
import Complaints from "./pages/complaints/complaints";
import Operations from "./pages/operations/operations";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/layout",
      element: <LayoutPage />, // Use 'element' instead of 'Component'
      children: [
        { path: "", element: <Home /> }, 
        { path: "sales", element: <Sales /> } ,
        { path: "purchase", element: <Purchase /> }, 
        { path: "finance", element: <Finance/> },
        { path: "complaints", element: <Complaints /> }, 
        { path: "operations", element: <Operations /> }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
