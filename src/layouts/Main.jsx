import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber/Navber";

const Main = () => {
    return (
        <>
        <Navber></Navber>
            <Outlet></Outlet>
        </>
    );
};

export default Main;