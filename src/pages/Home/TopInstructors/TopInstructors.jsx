import axios from "axios";
import { useEffect, useState } from "react";
import InstructorCard from "../../../components/InstructorCard";

const TopInstructors = () => {
    const [topIns, setTopIns] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/topinstructors')
        .then(res => setTopIns(res?.data))
    }, [])

    return (
        <div className="my-20 p-4 w-full md:w-11/12 mx-auto">
            <h2 className="text-5xl text-center font-extralight my-8">Featured Instructors</h2>
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                topIns.map(instructorInfo => <InstructorCard 
                    key={instructorInfo._id} 
                    instructorInfo = {instructorInfo}></InstructorCard>)
            }
            </div>
            <div className="flex justify-center my-8">
                <button className="btn border-b-[#01a2a6] border-b-4 hover:bg-[#01a2a6] 
                hover:text-white">All Instructors</button>
            </div>
        </div>
    );
};

export default TopInstructors;