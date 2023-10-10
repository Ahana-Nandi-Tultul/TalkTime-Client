import { Link, NavLink } from 'react-router-dom';
import logo1 from '../../../assets/logo1.png';
import logo2 from '../../../assets/logo2.png';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import useAdminOrInstructor from '../../../hooks/useAdminOrInstructor';
import ProfileLogout from '../../../components/ProfileLogout';
import { FaRegMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/Bs';

const Navber = () => {
    const {user, logout, isDarkMode, setIsDarkMode} = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [isAdminOrInsLoading] = useAdminOrInstructor();
   
    const handleLogout = () => {
        logout()
        .then(() => {
            localStorage.removeItem('talkTime-access-token');
        })
        .catch(error => {
            console.log(error)
        })
    }
    const navLinks = <>
        <NavLink to="/" className="font-semibold mr-4">Home</NavLink>
        <NavLink to="/instructors" className="font-semibold mr-4">Instructors</NavLink>
        <NavLink to="/classes" className="font-semibold mr-4">Classes</NavLink>
       
        {
            user ? 
           isAdminOrInsLoading?.isAdmin ? <NavLink to="/dashboard/adminhome" className="font-semibold mr-4">Dashboard</NavLink> :
            isAdminOrInsLoading?.isInstructor ? <NavLink to="/dashboard/instructorhome" className="font-semibold mr-4">Dashboard</NavLink> :
            <NavLink to="/dashboard/studenthome" className="font-semibold mr-4">Dashboard</NavLink> :
            ''
        }
    </>
    return (
        <>
            <div className={`navbar ${isDarkMode ? 'bg-[#18185a]' : 'bg-base-100'} p-4`}>
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className={`menu activeCs ${isDarkMode ? 'bg-[#00001a] text-white' : 'bg-white'} 
                    menu-sm dropdown-content mt-3 z-50 flex flex-col ${isOpen ? 'flex' : 'hidden'} p-2 shadow 
                    rounded-box w-52`}>
                        {navLinks}
                    </ul>
                    </div>
                    <a className={`btn btn-ghost normal-case text-3xl`}>
                        {
                            isDarkMode ?  <img src={logo2} alt="" className='h-[30px]' /> :
                            <img src={logo1} alt="" className='h-[30px]' />
                        }
                       
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu activeCs menu-horizontal px-1 z-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    isDarkMode ?  <button onClick={() => setIsDarkMode(!isDarkMode)}><BsFillSunFill className='"font-semibold mr-4'/></button> : 
                    <button onClick={() => setIsDarkMode(!isDarkMode)}><FaRegMoon className='"font-semibold mr-4'/></button>
                }
                    {
                        user ? <>
                        <ProfileLogout/>
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

export default Navber;