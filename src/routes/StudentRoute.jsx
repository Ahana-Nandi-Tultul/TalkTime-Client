import { Navigate, useLocation } from "react-router-dom";
import useAdminOrInstructor from "../hooks/useAdminOrInstructor";
import useAuth from "../hooks/useAuth";


const StudentRoutes = ({children}) => {
    const {user} = useAuth()
    const [isAdminOrInsOrStu, isAdminOrInsOrStuLoading] = useAdminOrInstructor();
    const location = useLocation();
    if(isAdminOrInsOrStuLoading){
        return <progress className="progress w-56"></progress>;
    }
    if(user && isAdminOrInsOrStu?.isStudent){
        return children;
    }

    return <Navigate to = "/" state={{from : location}}/>
};

export default StudentRoutes;