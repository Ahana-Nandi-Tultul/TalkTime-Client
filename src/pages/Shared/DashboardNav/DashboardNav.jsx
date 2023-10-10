import { Link } from 'react-router-dom';
import logo1 from '../../../assets/logo1.png';
import logo2 from '../../../assets/logo2.png';
import useAuth from "../../../hooks/useAuth";
import ProfileLogout from '../../../components/ProfileLogout';
import { FaRegMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/Bs';

const DashboardNav = () => {
    const {user, logout, isDarkMode, setIsDarkMode} = useAuth();
    
    const handleLogout2 = () => {
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
             <div className={`navbar ${isDarkMode ? 'bg-[#18185a] text-white' : 'bg-base-100 text-black'} p-4`}>
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" htmlFor="my-drawer-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                    </ul>
                    </div>
                    <Link to='/' className="normal-case text-3xl flex">
                        {
                            isDarkMode ?  <img src={logo2} alt="" className='h-[30px]' /> :
                            <img src={logo1} alt="" className='h-[30px]' />
                        }
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    isDarkMode ?  <button onClick={() => setIsDarkMode(!isDarkMode)}><BsFillSunFill className='font-semibold mr-4'/></button> : 
                    <button onClick={() => setIsDarkMode(!isDarkMode)}><FaRegMoon className='"font-semibold mr-4'/></button>
                }
                    {
                        user ? 
                        <>
                        <ProfileLogout></ProfileLogout>
                        <button className='btn' onClick={() => handleLogout2()}>Logout</button>
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