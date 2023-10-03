import { useEffect, useState } from "react";
import Banner2nd from "../../components/Banner2nd";
import InstructorCard from "../../components/InstructorCard";

const Instructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    useEffect(() => {
        fetch(`https://talk-time-server.vercel.app/allinstructors`)
        .then(res => res.json())
        .then(data => setAllInstructors(data))
        .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <Banner2nd heading="All Instructors"></Banner2nd>
            <div className="my-20 p-4 w-full md:w-11/12 mx-auto">
                <div  className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    allInstructors.map(instructorInfo => <InstructorCard
                        key={instructorInfo._id} 
                        instructorInfo = {instructorInfo}></InstructorCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Instructors;