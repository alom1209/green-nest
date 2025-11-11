import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Homelayout from "../layout/Homelayout";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Homelayout></Homelayout>,
        children:[
            {
               index:true,
               element:<Home></Home>
            },
            {
                path:'/plant',
                element:<div className="mt-15">this is plant section</div>
            },
            {
                path:'profile',
                element:<div>this is profile section</div>
            }
        ]
    },
    {
        path:'/about',
        element:<div>this is about section</div>
    }
])