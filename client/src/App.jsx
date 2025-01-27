import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import ItemDetails from "./pages/ItemDetails";

function App() {
  // Creating a browser for all links and pages

    const router=createBrowserRouter ([
      
      {path:'/',element:<Home/> },
        { path: "/item/:id", element: <ItemDetails /> }, 
       {errorElement:<NotFoundPage/> }// passing a wrong link leads to this page
        
    ]);
    return (
      <>
      <RouterProvider router={router}/> 
      </>
    )
}

export default App
