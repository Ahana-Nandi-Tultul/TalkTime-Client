import { Link } from "react-router-dom";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const SelectedClasses = () => {
    const [allselectedClasses, refetch] = useCart();
    const [instance] = useAxiosSecure();
    const [disabled, setDisabled] = useState(true);
    const {isDarkMode} = useAuth();

    const totalPrice = allselectedClasses.reduce((sum, item) => item.coursePrice + sum, 0);
    // console.log(totalPrice);
    useEffect(() => {
        if(allselectedClasses.length > 0){
            setDisabled(false)
        }
        else{
            setDisabled(true);
        }

    }, [allselectedClasses])
    const handleDeleteItem = async(item) => {
        event.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                instance.delete(`/carts/${item._id}`)
                .then(res => {
                    // console.log(res?.data)
                    if(res?.data?.deletedCount){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your selected course has been deleted.',
                            'success'
                        )
                    }
                })
            }
          })
    }

    return (
        <div className="w-full p-4">
            <div className="flex justify-between items-center md:w-11/12">
                <h2 className=" text-3xl font-semibold my-10">Total Price: ${totalPrice} </h2>
                <Link to='/dashboard/payments' className="btn btn-sm bg-[#01a2a6] text-white" disabled = {disabled}>Pay</Link>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className={`${isDarkMode ? "text-white" : "text-black"}`}>
                            <th>#</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            allselectedClasses.map((item, index) => <tr key={item._id}>
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
                                <div className="text-sm opacity-50">{item.instructorEmail}</div>
                                </td>
                                <td>
                                <button className={`btn btn-circle btn-outline ${isDarkMode ? 'bg-white' : ''}`} onClick={() => handleDeleteItem(item)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
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

export default SelectedClasses;