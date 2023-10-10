import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAdminOrInstructor from "../hooks/useAdminOrInstructor";
import './ClassCard.css';

const ClassCard = ({oneClass}) => {
    const {instructor, courseName, coursePrice, seats, image, enrolledStudents} = oneClass;
    const [disabled, setDisabled] = useState(false);
    const [instance] = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();
    const {user, isDarkMode} = useAuth();
    const [isAdminOrInsOrStu] = useAdminOrInstructor();
    const handleSelectClass = async(oneClass) => {
        if(user) {
            setDisabled(true);
            event.preventDefault();
            console.log(oneClass);
            const item = {
                instructor,
                courseName,
                image,
                coursePrice,
                courseId: oneClass._id,
                instructorEmail: oneClass.email,
                studentName: user?.displayName,
                studentEmail: user?.email,
            }
            instance.post('/carts', {item})
            .then(res => {
                // console.log(res?.data);
                if(res?.data?.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You have selected this course.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            });
        }
        else{
            navigate('/login', {state: {from: location}});
        }
        
    }
    
    return (
        <>
            <div className={`card w-full  shadow-xl ${ seats <= 0 ? 'on_seats' : ''}
             ${isDarkMode ? 'bg-[#18185a] text-white' : 'bg-base-100 text-black'}`}>
                <figure><img src={image} alt="Shoes" className="h-[500px] w-full"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{courseName} <small className="text-sm">by {instructor}</small></h2>
                    <p>Available Seats: {seats}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-between">
                    <div className="stat-value">${coursePrice}</div>
                    {
                        user ? 
                        <button onClick={() => handleSelectClass(oneClass)} className={`btn bg-[#01a2a6] text-white
                        ${isAdminOrInsOrStu?.isStudent &&  (enrolledStudents < seats )? '' : 'btn-disabled'}`} disabled = {disabled}>Select</button> 
                        
                        :

                        <button onClick={() => handleSelectClass(oneClass)} className={`btn bg-[#01a2a6] text-white
                    ${(enrolledStudents < seats ) ? '' : 'btn-disabled'}`} disabled = {disabled}>Select</button>
                    }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;