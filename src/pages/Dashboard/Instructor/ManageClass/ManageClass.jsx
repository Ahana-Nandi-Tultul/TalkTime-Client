import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { MdFeedback } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

const ManageClass = () => {
    const [instance] = useAxiosSecure();
    const {data: classes = [], refetch} = useQuery({
        queryKey: ['allclasses'],
        queryFn: async() => {
            const res = await instance('/allclasses')
            console.log(res?.data);
            return res?.data
        }
    })
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-10">Manage Classes: {classes.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Class</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Enrolled Students</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        classes.map((oneClass, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={oneClass.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{oneClass.courseName}</div>
                            </div>
                        </div>
                        </td>
                        <td>{oneClass.seats}</td>
                        <td className="text-left">${oneClass.coursePrice}</td>
                        <td>{oneClass.enrolledStudents}</td>
                        <td className="uppercase">{oneClass.status}</td>
                        <td>
                            <button className={`btn bg-yellow-600
                             text-white ${oneClass.status === 'denied' ? '' : 'btn-disabled'} `} ><MdFeedback className="w-6 h-6"/></button>
                        </td>
                        <td>
                            {/* TODO: implement update (an optional requirement) */}
                            <button className={`btn bg-[#01a2a6] text-white
                            ${oneClass.status === 'approved' ? 'btn-disabled' : '' } `}><FaRegEdit className="w-6 h-6"/></button>
                        </td>
                    </tr>)
                    }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;