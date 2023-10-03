import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber/Navber";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;