import { useEffect, useState } from "react";
import Banner2nd from "../../components/Banner2nd";
import ClassCard from "../../components/ClassCard";

const Classes = () => {
    const [allClassesStu, setAllClassesStu] = useState([]);
    useEffect(() => {
        fetch('https://talk-time-server.vercel.app/allclassesStu')
        .then(res => res.json())
        .then(data => setAllClassesStu(data))
        .catch(error => console.log(error))
    }, []);
    return (
        <div>
            <Banner2nd heading="All Classes"></Banner2nd>
            <div className="my-20 p-4 w-full md:w-11/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    allClassesStu.map(oneClass => <ClassCard key={oneClass._id} oneClass = {oneClass}></ClassCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Classes;