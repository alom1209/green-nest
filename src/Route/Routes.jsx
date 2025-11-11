import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Homelayout from "../layout/Homelayout";
import Allplants from "../Components/Allplants";

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
                element:<Allplants></Allplants>
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