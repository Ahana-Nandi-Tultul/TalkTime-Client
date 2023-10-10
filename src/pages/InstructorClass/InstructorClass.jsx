import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClassCard from "../../components/ClassCard";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const InstructorClass = () => {
    const [oneInstructor, setOneInstructor] = useState([]);
    const [classesInfo, setClassesInfo] = useState([]);
    const {isDarkMode} = useAuth();
    const insId = useParams();
    const id = insId?.id;
 
    useEffect(() => {
        axios.get(`https://talk-time-server.vercel.app/instructors/${id}`)
        .then( res => {
            setOneInstructor(res?.data);
        });
    }, [id])
    useEffect(() => {
        axios.get(`https://talk-time-server.vercel.app/instructors/classes/${oneInstructor?.email}`)
        .then(res => {
            
            setClassesInfo(res?.data)
        })
    }, [oneInstructor])
    return (
        <>
        <div className={`${isDarkMode ? 'bg-[#10103c] text-white' : 'bg-base-200 text-black'}`} data-aos="slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full md:w-3/4  p-4 mx-auto" >
                <div className="w-full" >
                    <h2 className="text-7xl font-extralight mb-2">{oneInstructor.name}</h2>
                    <h2 className="text-xl font-extralight">{oneInstructor.email}</h2>
                    <div className="my-10 space-y-4">
                        <p className="text-5xl">Taken Classes: {classesInfo.length}</p>
                        <p className="text-5xl">Classes: </p>
                        <ul>
                            {
                                classesInfo.map((oneClass, index) => <li key={index} className="text-3xl">
                                    {index+1}. {oneClass.courseName}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className=" w-full rounded-lg">
                    <img src={oneInstructor.photo} alt="" className="h-[600px] w-full rounded-lg"/>
                </div>
            </div>
        </div>
        <div className=" w-full md:w-11/12  p-4 mx-auto my-20" data-aos="slide-up">
            <h2 className="text-5xl text-center font-extralight my-8">Classes of {oneInstructor.name}</h2>
            {classesInfo.length === 0 && <p className="text-3xl text-center my-8">No Class Available Now!!</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                {
                    classesInfo.map(oneClass => <ClassCard key={oneClass._id} oneClass={oneClass}></ClassCard>)
                }
            </div>
        </div>
        </>
    );
};

export default InstructorClass;