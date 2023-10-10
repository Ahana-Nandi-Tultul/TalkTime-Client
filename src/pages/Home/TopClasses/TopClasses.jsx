import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard";
import { Link } from "react-router-dom";

const TopClasses = () => {
    const [topClasses, setTopClasses] = useState([])
    useEffect(() => {
        fetch('https://talk-time-server.vercel.app/topclasses')
        .then(res => res.json())
        .then(data => setTopClasses(data))
    }, [])
    return (
        <div className="my-20 p-4 w-full md:w-11/12 mx-auto" data-aos="slide-up">
            <h2 className="text-5xl text-center font-extralight my-8">Top Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    topClasses.map(oneClass => <ClassCard key={oneClass._id} oneClass = {oneClass}></ClassCard>)
                }
            </div>
            <div className="flex justify-center my-8">
                <Link to="/classes"><button className="btn border-b-[#01a2a6] border-b-4 hover:bg-[#01a2a6] 
                hover:text-white">All Classes</button></Link>
            </div>
        </div>
    );
};

export default TopClasses;