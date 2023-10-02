import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ClassCard = ({oneClass}) => {
    const {instructor, courseName, coursePrice, seats, image} = oneClass;
    const [disabled, setDisabled] = useState(false);
    const [instance] = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();
    const {user} = useAuth();
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
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className="h-[500px] w-full"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{courseName} <small className="text-sm">by {instructor}</small></h2>
                    <p>Available Seats: {seats}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-between">
                    <div className="stat-value">${coursePrice}</div>
                    <button onClick={() => handleSelectClass(oneClass)} className={`btn bg-[#01a2a6] text-white
                    `} disabled = {disabled}>Select</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;