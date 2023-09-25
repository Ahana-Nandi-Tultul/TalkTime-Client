import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { MdFeedback } from "react-icons/md";
import { BiTask, BiTaskX } from "react-icons/bi";
import Swal from "sweetalert2";
import { useState } from "react";
import FeedbackModal from "./FeedbackModal";

const AllClasses = () => {
    const [instance] = useAxiosSecure();
    const [openModal, setOpenModal] = useState(false);
    const [oneClass, setOneClass] = useState({});
    const {data: classes = [], refetch} = useQuery({
        queryKey: ['allclasses'],
        queryFn: async() => {
            const res = await instance('/allclasses')
            // console.log(res?.data);
            return res?.data
        }
    });
    const handleStatus = (oneClass, status) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
          }).then((result) => {
            if (result.isConfirmed) {
            instance.patch(`/classes/${oneClass._id}`, {status: status})
            .then(res => {
                // console.log(res?.data)
                if(res?.data?.modifiedCount > 0){
                    refetch();
                    Swal.fire(
                        'Success!',
                        'Status has been updated',
                        'success'
                      )
                }
            })
            }
          })
    }
    const handleFeedbackModal = (oneClass) => {
        event.preventDefault()
        setOpenModal(true);
        setOneClass(oneClass);
    }

    const handleSetFeedback = (oneClass) => {
        event.preventDefault();
        const feedback = event.target.feedback.value;
       instance.put(`/classes/${oneClass._id}`, {feedback})
       .then(res => {
        console.log(res?.data);
        if(res?.data?.modifiedCount > 0){
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
            <h2 className="text-center text-3xl font-semibold my-10">Number of Classes: {classes.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Class</th>
                        <th>Available Seats</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Enrolled Students</th>
                        <th>Status</th>
                        <th>Approved</th>
                        <th>Deny</th>
                        <th>Feedback</th>
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
                        <td>{oneClass.instructor}
                        <br/>
                        <div className="text-sm opacity-50">Email: {oneClass.email}</div>
                        </td>
                        <td className="text-left">${oneClass.coursePrice}</td>
                        <td className="text-left">{oneClass.enrolledStudents}</td>
                        <td className="uppercase">{oneClass.status}</td>
                        <td>
                            <button className={`btn bg-yellow-600
                             text-white ${oneClass.status === 'approved' || oneClass.status === 'denied'
                             ? 'btn-disabled' : ''} `}  onClick={() => handleStatus(oneClass, 'approved')}><BiTask className="w-6 h-6"/></button>
                        </td>
                        <td>
                            <button className={`btn bg-red-600
                             text-white ${oneClass.status === 'approved' || oneClass.status === 'denied'
                             ? 'btn-disabled' : ''} `} onClick={() => handleStatus(oneClass, 'denied')}><BiTaskX className="w-6 h-6"/></button>
                        </td>
                        <td>
                            <button className={`btn bg-[#01a2a6] text-white
                             `} htmlFor = 'my_modal_5' onClick={() => handleFeedbackModal(oneClass)}><MdFeedback className="w-6 h-6"/></button>
                        </td>
                    </tr>)
                    }
                    
                    </tbody>
                </table>
            </div>
            <FeedbackModal
            openModal = {openModal}
            setOpenModal = {setOpenModal}
            oneClass = {oneClass}
            handleSetFeedback = {handleSetFeedback}
            ></FeedbackModal>
        </div>
    );
};

export default AllClasses;