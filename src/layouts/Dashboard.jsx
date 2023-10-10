import { NavLink, Outlet } from "react-router-dom";
import DashboardNav from "../pages/Shared/DashboardNav/DashboardNav";
import { FaPalette, FaReadme, FaUserGroup} from 'react-icons/fa6';
import { FaBookReader, FaCreditCard, FaHome, FaShoppingCart} from 'react-icons/fa';
import { BiAddToQueue } from 'react-icons/bi';
import { SiNginxproxymanager } from 'react-icons/si';
import useAdminOrInstructor from "../hooks/useAdminOrInstructor";
import Footer from "../pages/Shared/Footer/Footer";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const [isAdminOrInsOrStu] = useAdminOrInstructor();
    const {isDarkMode} = useAuth();
    // console.log(isAdminOrInsLoading);
    return (
        <>
           <DashboardNav></DashboardNav>
           <div className={`${isDarkMode ? 'bg-[#00001a] text-white' : 'bg-white text-black'}`}>

            <div className={`drawer lg:drawer-open ${isDarkMode ? 'bg-[#00001a] text-white' : 'bg-white text-black'}`}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center overflow-auto my-20">
                <Outlet></Outlet>
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className={`menu dasActiveCS p-4 w-72 min-h-full 
                ${isDarkMode ? 'bg-[#18185a]' : 'bg-[#01a2a6]'} text-base-content`}>
                {
                    isAdminOrInsOrStu?.isAdmin && 
                    <>
                        <NavLink to='/dashboard/adminHome' className="flex text-lg text-white items-center gap-2 mb-2" ><FaPalette/> Dashboard</NavLink>
                        <NavLink to='/dashboard/allusers' className="flex text-lg text-white items-center gap-2 mb-2" ><FaUserGroup/> Manage Users</NavLink>
                        <NavLink to='/dashboard/allclasses' className="flex text-lg text-white items-center gap-2 mb-2" ><SiNginxproxymanager/> Manage Classes</NavLink>
                    </>
                }
                {
                     isAdminOrInsOrStu?.isInstructor && <>
                        <NavLink to='/dashboard/instructorhome' className="flex text-lg text-white items-center gap-2 mb-2" ><FaPalette/> Dashboard</NavLink>
                        <NavLink to='/dashboard/addclass' className="flex text-lg text-white items-center gap-2 mb-2" ><BiAddToQueue/> Add Class</NavLink>
                        <NavLink to='/dashboard/manageclass' className="flex text-lg text-white items-center gap-2 mb-2" ><FaUserGroup/> Manage Class</NavLink>

                     </>
                }
                {
                    isAdminOrInsOrStu?.isStudent &&
                    <>
                        <NavLink to='/dashboard/studenthome' className="flex text-lg text-white items-center gap-2 mb-2" ><FaPalette/> Dashboard</NavLink>
                        <NavLink to='/dashboard/selectedclasses' className="flex text-lg text-white items-center gap-2 mb-2" ><FaShoppingCart/> My Selected Classes</NavLink>
                        <NavLink to='/dashboard/enrolledclasses' className="flex text-lg text-white items-center gap-2 mb-2" ><FaBookReader/> My Enrolled Classes</NavLink>
                        <NavLink to='/dashboard/paymentHistory' className="flex text-lg text-white items-center gap-2 mb-2" ><FaCreditCard/> My payment History</NavLink>

                    </>
                }
                <div className="divider"></div>
                <NavLink to='/' className="flex text-lg text-white items-center gap-2 mb-2" ><FaHome/> Home</NavLink>
                <NavLink to='/classes' className="flex text-lg text-white items-center gap-2 mb-2" ><FaReadme/> Classes</NavLink>
                <NavLink to='/instructors' className="flex text-lg text-white items-center gap-2 mb-2" ><FaUserGroup/> Instructors</NavLink>

               
                </ul>
            
            </div>
            </div>
            <Footer></Footer>
           </div>
        </>
    );
};

export default Dashboard;