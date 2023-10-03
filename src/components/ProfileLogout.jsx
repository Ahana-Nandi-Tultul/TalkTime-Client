import { FaUserCircle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { Tooltip } from "react-tooltip";

const ProfileLogout = () => {
    const {user} = useAuth()
    return (
        <div className="avatar mr-4">
            <div className="w-10 h-10 rounded-full ring ring-[#01a2a6] ring-offset-2">
                {
                    user?.photoURL ? 
                    <img src={user?.photoURL} 
                    className='me-2 bg-dark text-white' 
                    data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}/>
                    :<FaUserCircle data-tooltip-content={user?.displayName}/>
                }
                <Tooltip id="my-tooltip" className='bg-black text-white z-20' />
            </div>
        </div>
    );
};

export default ProfileLogout;