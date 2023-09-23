import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.jpg';
const Navber = () => {
    const navLinks = <>
        <NavLink to="/" className="font-semibold mr-4">Home</NavLink>
        <NavLink to="/instructors" className="font-semibold mr-4">Instructors</NavLink>
        <NavLink to="/classes" className="font-semibold mr-4">Classes</NavLink>
        <NavLink to="/dashboard" className="font-semibold mr-4">Dashboard</NavLink>
    </>
    return (
        <>
            <div className="navbar bg-base-100 p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl ">
                        <img src={logo} alt="" className='h-[50px]' />
                        TalkTime
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn">Login</Link>
                </div>
            </div>
        </>
    );
};

export default Navber;