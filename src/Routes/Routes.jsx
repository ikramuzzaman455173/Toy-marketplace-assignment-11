import { createBrowserRouter } from "react-router-dom";
import AddToy from "../Components/AddToy";
import AllToys from "../Components/AllToys";
import Blogs from "../Components/Blogs";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Login";
import UpdateToy from "../Components/MyToyUpdate";
import MyToys from "../Components/MyToys";
import Register from "../Components/Register";
import ToyDetails from "../Components/ToyDetails";
import Home from "../Pages/Home/Home";
import MainPageLayout from "../Pages/PageLayout/MainPageLayout";
import PrivateRoute from "./PrivateRoute";

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
        loader: ({ params }) => fetch(`http://localhost:4000/toy/${params.id}`)
      },
      {
        path: '/addToys',
        element:<PrivateRoute><AddToy/></PrivateRoute>
      },
      {
        path: '/updateToy/:id',
        element:<PrivateRoute><UpdateToy /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:4000/toy/${params.id}`)
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