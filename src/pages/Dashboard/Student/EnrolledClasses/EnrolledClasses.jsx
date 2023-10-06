import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const EnrolledClasses = () => {
    const {user, isDarkMode} = useAuth();
    const [enrolledclasses, setEnrolledClasses] = useState([]);
    const [instance] = useAxiosSecure();
    useEffect(() => {
        instance(`/payments/${user?.email}`)
        .then(res => {
            setEnrolledClasses(res?.data)
        })
    }, [])
    return (
        <div className="w-full p-4">
            <h2 className="text-center text-3xl my-10 font-semibold">My Enrolled Classes: {enrolledclasses.length}</h2>
            <div>
            <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className={`${isDarkMode ? "text-white" : "text-black"}`}>
                            <th>#</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            enrolledclasses.map((item, index) => <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">{item.courseName}</div>
                                    <div className="text-sm opacity-50">${item.coursePrice}</div>
                                    </div>
                                </div>
                                </td>
                                <td>{item.instructor}<br/>
                                <div className="text-sm opacity-50">{item.InstructrorEmail}</div>
                                </td>
                            </tr>)
                        }
                        
                        </tbody> 
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClasses;