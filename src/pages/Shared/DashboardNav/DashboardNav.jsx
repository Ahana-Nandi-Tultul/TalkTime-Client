import { Link } from 'react-router-dom';
import logo1 from '../../../assets/logo1.png';
import useAuth from "../../../hooks/useAuth";
import ProfileLogout from '../../../components/ProfileLogout';

const DashboardNav = () => {
    const {user, logout, } = useAuth();
    
    const handleLogout = () => {
        logout()
        .then(() => {
            localStorage.removeItem('talkTime-access-token');

        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <>
             <div className="navbar bg-base-100 p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" htmlFor="my-drawer-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                    </ul>
                    </div>
                    <Link to='/' className="normal-case text-3xl flex">
                        <img src={logo1} alt="" className='h-[30px]' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <>
                        <ProfileLogout></ProfileLogout>
                        <button className='btn' onClick={handleLogout}>Logout</button>
                        </>
                         :
                        <Link to="/login" className="btn">Login</Link>
                    }
                    
                </div>
            </div>
        </>
    );
};

export default DashboardNav;