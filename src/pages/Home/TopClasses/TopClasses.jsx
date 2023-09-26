import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard";

const TopClasses = () => {
    const [topClasses, setTopClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/topclasses')
        .then(res => res.json())
        .then(data => setTopClasses(data))
    }, [])
    return (
        <div className="my-20 p-4 w-full md:w-11/12 mx-auto">
            <h2 className="text-5xl text-center font-extralight my-8">Top Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    topClasses.map(oneClass => <ClassCard key={oneClass._id} oneClass = {oneClass}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default TopClasses;