import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import PrivateRoute from "./PrivateRoute";
import InsHome from "../pages/Dashboard/Instructor/InsHome/InsHome";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import ManageClass from "../pages/Dashboard/Instructor/ManageClass/ManageClass";
import AllClasses from "../pages/Dashboard/Admin/AllClasses/AllClasses";
import InstructorClass from "../pages/InstructorClass/InstructorClass";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import StudentHome from "../pages/Dashboard/Student/StudentHome/StudentHome";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses/SelectedClasses";
import Payments from "../pages/Dashboard/Student/Payments/Payments";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";
import StudentRoutes from "./StudentRoute";
import ErrorPage from "../pages/Shared/Error/ErrorPage";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/signup',
              element: <SignUp></SignUp>
            },
            {
              path: '/instructors',
              element: <Instructors></Instructors>
            },
            {
              path: '/instructorClasses/:id',
              element: <InstructorClass></InstructorClass>
            },
            {
              path: '/classes',
              element: <Classes></Classes>
            }
        ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // admin routes
        {
          path: 'adminHome',
          element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path: 'allusers',
          element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes> 
        },
        {
          path: 'allclasses',
          element: <AdminRoutes><AllClasses></AllClasses></AdminRoutes>
        },
        // instructor routes
        {
          path: "instructorhome",
          element: <InstructorRoutes><InsHome></InsHome></InstructorRoutes>
        },
        {
          path: 'addclass',
          element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
        },
        {
          path: 'manageclass',
          element: <InstructorRoutes><ManageClass></ManageClass></InstructorRoutes>
        },
        // student routes
        {
          path: 'studenthome',
          element: <StudentRoutes><StudentHome></StudentHome></StudentRoutes> 
        },
        {
          path: 'selectedclasses',
          element: <StudentRoutes><SelectedClasses></SelectedClasses></StudentRoutes>
        },
        {
          path: 'payments',
          element: <StudentRoutes><Payments></Payments></StudentRoutes>
        },
        {
          path: 'enrolledclasses',
          element: <StudentRoutes><EnrolledClasses></EnrolledClasses></StudentRoutes>
        }
        ,
        {
          path: 'paymentHistory',
          element: <StudentRoutes><PaymentHistory></PaymentHistory></StudentRoutes>
        }
        
      ]
    }
  ]);

  export default router