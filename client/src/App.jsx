import { createBrowserRouter,RouterProvider} from "react-router";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

function App() {
  // Creating a browser for all links and pages

    const router=createBrowserRouter ([
      
      {path:'/',element:<Home/>, // home route
      errorElement:<NotFoundPage/> // passing a wrong link leads to this page
        }
    ]);
    return (
      <>
      <RouterProvider router={router}/> 
      </>
    )
}

export default App
