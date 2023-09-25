import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { MdFeedback } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { useState } from "react";
import ViewFeedbackModal from "./ViewFeedbackModal";
import UpdateClassModal from "./UpdateClassModal";
import Swal from "sweetalert2";

const ManageClass = () => {
    const [instance] = useAxiosSecure();
    const [openViewFeedbackModal, setOpenViewFeedbackModal] = useState(false);
    const [oneClassFeedback, setOneClassFeedback] = useState({});
    const [openUpdateClassModal, setOpenUpdateClassModal] = useState(false);
    const [oneClassUpdate, setOneClassUpdate] = useState({});
    const {data: classes = [], refetch} = useQuery({
        queryKey: ['allclasses'],
        queryFn: async() => {
            const res = await instance('/allclasses')
            // console.log(res?.data);
            return res?.data
        }
    })

    const handleViewFeedbackModal = (oneClass) => {
        event.preventDefault();
        setOpenViewFeedbackModal(true);
        setOneClassFeedback(oneClass);
    }

    const handleOpenUpdateClass = (oneClass) => {
        event.preventDefault();
        setOpenUpdateClassModal(true);
        setOneClassUpdate(oneClass);
    }

    const handleClassUpdate = (oneClass) => {
        event.preventDefault();
        const form = event.target;
        const courseName = form.courseName.value;
        const coursePrice = form.coursePrice.value;
        const seats = form.seats.value;
        const status = 'pending';

        const updateInfo = {courseName, coursePrice, seats, status};
        // console.log(updateInfo);

        instance.patch(`/updateClass/${oneClass._id}`, {updateInfo})
        .then(res => {
            // console.log(res?.data)
            if(res?.data?.modifiedCount > 0){
                refetch();
                setOpenUpdateClassModal(false)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully! Your feedback has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

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
                            <button onClick ={() => handleViewFeedbackModal(oneClass)} className={`btn bg-yellow-600
                             text-white ${oneClass.status === 'denied' ? '' : 'btn-disabled'} `} ><MdFeedback className="w-6 h-6"/></button>
                        </td>
                        <td>
                            <button onClick={() => handleOpenUpdateClass(oneClass)}
                            className={`btn bg-[#01a2a6] text-white
                            ${oneClass.status === 'approved' ? 'btn-disabled' : '' } `}><FaRegEdit className="w-6 h-6"/></button>
                        </td>
                    </tr>)
                    }
                    
                    </tbody>
                </table>
            </div>
            <ViewFeedbackModal
            openViewFeedbackModal = {openViewFeedbackModal}
            setOpenViewFeedbackModal = {setOpenViewFeedbackModal}
            oneClassFeedback = {oneClassFeedback}
            ></ViewFeedbackModal>
            
            <UpdateClassModal
            oneClassUpdate = {oneClassUpdate}
            handleClassUpdate = {handleClassUpdate}
            openUpdateClassModal = {openUpdateClassModal}
            setOpenUpdateClassModal = {setOpenUpdateClassModal}
            >
            </UpdateClassModal>
        </div>
    );
};

export default ManageClass;