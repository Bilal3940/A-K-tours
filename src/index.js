
import {createRoot} from 'react-dom/client';
import './index.scss';  
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Reviews from './Reviews';
import Home from "./Home";
import Contact from "./Contact";
import Navbar from './Navbar';
import Footer from './Footer';

const router = createBrowserRouter([
    {
      path: "/my-app",
      element: (
      <div>
        <Navbar/>  
        <Home/>
        <Footer/>
      {/* <App/> */}
      </div>),
    },
      {
        path: "/Contact",
        element: (
        <div>
            <Navbar/>   
            <Contact/>
            <Footer/>
        {/* <App/> */}
        </div>),
      },
      {
        path: "/Reviews",
        element: (
        <div>
            <Navbar/>    
            <Reviews/>
            <Footer/>
        {/* <App/> */}
        </div>),
      },
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );