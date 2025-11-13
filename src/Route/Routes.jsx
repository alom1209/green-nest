import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Homelayout from "../layout/Homelayout";
import Allplants from "../Components/Allplants";
import PlantDetails from "../Pages/PlantDetails";
import Authlayout from "../layout/Authlayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Privateroute from "../Components/Privateroute";

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
            },
            {
                path:'/plants/:id',
                element:(<Privateroute>
                    <PlantDetails></PlantDetails>
                </Privateroute>)
            }
        ]
    },
    {
        path:'/auth',
        element:<Authlayout></Authlayout>,
        children:[
            {
               path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    }
])