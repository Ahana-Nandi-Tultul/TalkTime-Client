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

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
          element: <AdminHome></AdminHome>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'allclasses',
          element: <AllClasses></AllClasses>
        },
        // instructor routes
        {
          path: "instructorhome",
          element: <InsHome></InsHome>
        },
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        {
          path: 'manageclass',
          element: <ManageClass></ManageClass>
        },
        // student routes
        {
          path: 'studenthome',
          element: <StudentHome></StudentHome>
        },
        {
          path: 'selectedclasses',
          element: <SelectedClasses></SelectedClasses>
        },
        {
          path: 'payments',
          element: <Payments></Payments>
        }
        
      ]
    }
  ]);

  export default router