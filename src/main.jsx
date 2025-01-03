import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import ErrorPage from './layout/ErrorPage';
import Home from './layout/Home';
import Login from './layout/Login';
import Register from './layout/Register';
import AddVisa from './layout/AddVisa';
import AuthProvider from './providers/AuthProvider';
import AllVisa from './layout/AllVisa';
import AddedVisa from './layout/AddedVisa';
import VisaApplication from './layout/VisaApplication';
import PrivateRoute from '../PrivateRoute';
import VisaDetails from './layout/VisaDetails';
import PasswordReset from './layout/PasswordReset';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/visa')
      },
      {
        path: "/add-visa",
        element: <PrivateRoute> <AddVisa></AddVisa> </PrivateRoute>
      },
      {
        path: "/all-visa",
        element: <AllVisa></AllVisa>,
        loader: () => fetch('http://localhost:5000/visa')
      },
      {
        path: "/added-visa",
        element: <PrivateRoute> <AddedVisa></AddedVisa></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/visa')
      },
      {
        path: "/visa-application",
        element: <PrivateRoute> <VisaApplication></VisaApplication> </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/visa-application')
      },
      {
        path: "visa/:_id",
        element: <PrivateRoute> <VisaDetails></VisaDetails> </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/visa')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/password-reset',
        element: <PasswordReset></PasswordReset>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
