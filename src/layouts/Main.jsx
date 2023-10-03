import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber/Navber";
import Footer from "../pages/Shared/Footer/Footer";
import useAuth from "../hooks/useAuth";

const Main = () => {
    const {isDarkMode} = useAuth();
    return (
        <div className={`${isDarkMode ? 'bg-[#00001a] text-white' : 'bg-white text-black'}`}>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;