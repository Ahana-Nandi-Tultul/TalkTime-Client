import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";


const AddClass = () => {
    const {user, isDarkMode} = useAuth();
    const [instance] = useAxiosSecure();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset
      } = useForm();
    const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    

    const onSubmit = async(data) =>{
        // console.log(data)

        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            // console.log(imgResponse);
            const imgURL = imgResponse.data.display_url;
            const {instructor, email, courseName, coursePrice, seats} = data

        const newClass = {
            instructor, 
            email, 
            courseName, 
            coursePrice : parseInt(coursePrice), 
            seats : parseInt(seats), 
            image: imgURL, 
            status: 'pending', 
            enrolledStudents : 0};

         instance.post('/classes', {newClass})
         .then(res => {
            // console.log(res?.data);
            if(res?.data?.insertedId){
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your class has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/dashboard/manageclass');
            }
         })

        })
        .catch(error => {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: `${error?.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
    }
    
    return (
        <div className={`w-full p-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <h2 className="text-center text-3xl my-10 font-semibold">Add Class</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Instructor Name*</span>
                            </label>
                            <input type="text" {...register('instructor', {required: true})} defaultValue={user?.displayName}
                             className={`input input-bordered
                        ${isDarkMode ? 'bg-[#10103c] text-white' : 'bg-base-100 text-black'}
                        `} required readOnly/>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Instructor Email*</span>
                            </label>
                            <input type="text" defaultValue={user?.email} readOnly 
                            {...register('email', {required: true})}
                            className={`input input-bordered
                        ${isDarkMode ? 'bg-[#10103c] text-white' : 'bg-base-100 text-black'}
                        `} required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Class Name*</span>
                            </label>
                            <input type="text" placeholder="course name" 
                            {...register('courseName', {required: true})}
                             className={`input input-bordered
                        ${isDarkMode ? 'bg-[#10103c] text-white' : 'bg-base-100 text-black'}
                        `} required />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Price*</span>
                            </label>
                            <input type="number" placeholder="course price" 
                            {...register('coursePrice', {required: true})}
                            className={`input input-bordered
                        ${isDarkMode ? 'bg-[#10103c] text-white' : 'bg-base-100 text-black'}
                        `} required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        <div className="form-control w-full">
                            <label className="label"> 
                                <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Available Seats*</span>
                            </label>
                            <input type="text" placeholder="available seats" 
                            {...register('seats', {required: true})}
                            className={`input input-bordered
                        ${isDarkMode ? 'bg-[#10103c] text-white' : 'bg-base-100 text-black'}
                        `} required/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Class Image*</span>
                            </label>
                            <input type="file" 
                            {...register('image', {required: true})}
                            className = {`file-input file-input-bordered w-full
                            ${isDarkMode ? 'bg-[#10103c] text-white' : 'bg-base-100 text-black'}`} required/>
                        </div>
                    </div>
                    <input type="submit" value="Add Class" className="btn btn-active bg-[#01a2a6] text-white w-full"/>
                </form>
            </div>
        </div>
    );
};

export default AddClass;