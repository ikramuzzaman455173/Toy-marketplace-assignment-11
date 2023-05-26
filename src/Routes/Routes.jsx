import { createBrowserRouter } from "react-router-dom";
import MainPageLayout from "../Pages/PageLayout/MainPageLayout";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ToyDetails from "../Components/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/ErrorPage";
import Blogs from "../Components/Blogs";
import AllToys from "../Components/AllToys";
import AddToy from "../Components/AddToy";
import MyToys from "../Components/MyToys";
import UpdateToy from "../Components/MyToyUpdate";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPageLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/register',
        element:<Register/>
      },
      {
        path: '/allToys',
        element:<AllToys/>
      },
      {
        path: '/toy/:id',
        element:<PrivateRoute> <ToyDetails /></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-marketplace-server-side-ten.vercel.app/toy/${params.id}`)
      },
      {
        path: '/addToys',
        element:<PrivateRoute><AddToy/></PrivateRoute>
      },
      {
        path: '/updateToy/:id',
        element:<PrivateRoute><UpdateToy /></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-marketplace-server-side-ten.vercel.app/toy/${params.id}`)
      },
      {
        path: '/myToys',
        element:<PrivateRoute> <MyToys /></PrivateRoute>
      },
      {
        path: '/blog',
        element:<Blogs/>
      }
    ]
  },

])

export default router