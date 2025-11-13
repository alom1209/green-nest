import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home.jsx';
import { router } from './Route/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import Authprovider, { AuthContext } from './provider/Authprovider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
    <RouterProvider router={router}></RouterProvider>
   <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
   </Authprovider>
   
  </StrictMode>,
)
