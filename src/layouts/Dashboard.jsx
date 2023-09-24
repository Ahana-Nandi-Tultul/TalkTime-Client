import { NavLink, Outlet } from "react-router-dom";
import DashboardNav from "../pages/Shared/DashboardNav/DashboardNav";
import { FaPalette, FaUserGroup, } from 'react-icons/fa6';
import { BiAddToQueue } from 'react-icons/bi';
import useAdminOrInstructor from "../hooks/useAdminOrInstructor";

const Dashboard = () => {
    const [isAdminOrInsLoading] = useAdminOrInstructor();
    // console.log(isAdminOrInsLoading);
    return (
        <>
           <DashboardNav></DashboardNav>
            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu dasActiveCS p-4 w-72 min-h-full bg-[#01a2a6] text-base-content">
                {
                    isAdminOrInsLoading?.isAdmin && 
                    <>
                        <NavLink to='/dashboard/adminHome' className="flex text-lg text-white items-center gap-2 mb-2" ><FaPalette/> Dashboard</NavLink>
                        <NavLink to='/dashboard/allusers' className="flex text-lg text-white items-center gap-2 mb-2" ><FaUserGroup/> All Users</NavLink>
                    </>
                }
                {
                     isAdminOrInsLoading?.isInstructor && <>
                        <NavLink to='/dashboard/inshome' className="flex text-lg text-white items-center gap-2 mb-2" ><FaPalette/> Dashboard</NavLink>
                        <NavLink to='/dashboard/addclass' className="flex text-lg text-white items-center gap-2 mb-2" ><BiAddToQueue/> Add Class</NavLink>
                        <NavLink to='/dashboard/manageclass' className="flex text-lg text-white items-center gap-2 mb-2" ><BiAddToQueue/> Manage Class</NavLink>

                     </>
                }
               
                </ul>
            
            </div>
            </div>
        </>
    );
};

export default Dashboard;