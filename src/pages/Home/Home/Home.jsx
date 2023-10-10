import { Fade } from "react-awesome-reveal";
import useAuth from "../../../hooks/useAuth";
import AllInNumbers from "../AllInNumbers/AllInNumbers";
import Banner from "../Banner/Banner";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructors from "../TopInstructors/TopInstructors";

const Home = () => {
    const {isDarkMode} = useAuth();
    return (
        <div className={`${isDarkMode ? 'bg-[#00001a] text-white' : 'bg-white text-black'}`}>
            <Fade cascade>
                <Banner></Banner>
            </Fade>
                <TopClasses></TopClasses>
                <TopInstructors></TopInstructors>
                <AllInNumbers></AllInNumbers>
            
        </div>
    );
};

export default Home;