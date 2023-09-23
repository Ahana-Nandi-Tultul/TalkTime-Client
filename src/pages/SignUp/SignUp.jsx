import { Link } from 'react-router-dom';
import image1 from '../../assets/crop_authentication.png';
import SocialLogin from '../../components/SocialLogin';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, updateUserProfile} = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) =>{
        event.preventDefault();
        if(data.password === data.cpassword){
            console.log(data)
            createUser(data.email, data.password)
            .then(result => {

                updateUserProfile(data.name, data.photo)
                .then(() => {})
                .catch(error => {
                    Swal.fire({
                        title: 'Error!',
                        text: `${error?.message}`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      })
                })

                const loggedUser = result.user;
                console.log(loggedUser);

                const  newUser = {
                    name: data?.name, 
                    email: loggedUser?.email, 
                    photo: data?.photo, 
                    phone: data?.phone,
                    address: data?.address,
                    role: 'Student',
                    gender: data?.gender
                }
                console.log(newUser);

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully! You have created an account.',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error?.message}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            })
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'Password does not match.',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
        
      } 
    return (
        <>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={image1} alt="" className='w-full' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                        <h1 className="text-3xl text-center font-bold">Please Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" 
                            {...register("name", { required: true })} required/>
                            {errors.name && <span className="text-red-500">
                                <small>Name field is required</small></span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" 
                            {...register("email", { required: true })} required/>
                            {errors.email && <span className="text-red-500">
                                <small>Email field is required</small></span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL*</span>
                            </label>
                            <input type="text" placeholder="photoURL" className="input input-bordered" 
                            {...register("photo", { required: true })} required/>
                            {errors.photo && <span className="text-red-500">
                                <small>Photo URL field is required</small></span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" placeholder="phone number" className="input input-bordered"
                            {...register("phone")}/>
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="address" className="input input-bordered" 
                            {...register("address")}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='flex items-center'>
                                    <input type="radio" className="radio radio-primary" 
                                    {...register("gender")} value="Male"/>
                                    <span className='ml-1'>Male</span>
                                    
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" className="radio radio-primary" 
                                    {...register("gender")} value="Female"/>
                                    <span className='ml-1'>Female</span>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio"  className="radio radio-primary" 
                                    {...register("gender")} value="Other"/>
                                    <span className='ml-1'>Other</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password*</span>
                            </label>
                            <div className="relative">
                                <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className="input input-bordered w-full" 
                                {...register("password", { required: true, minLength: 6, 
                                pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])/i })} required/>
                                <span
                                className="absolute inset-y-0 right-0 px-3 py-2 btn bg-transparent border-0"
                                onClick={() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            
                            {errors.password && <span className="text-red-500">
                                <small>Password field is required. Password must have 6 characters,
                            one capital letter, one special letter</small></span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password*</span>
                            </label>
                            <input type="password" placeholder="confirm password" className="input input-bordered" 
                            {...register("cpassword", { required: true })} required/>
                            {errors.cpassword && <span className="text-red-500">
                                <small>Confirm Password field is required</small></span>}
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value="Sign up" className="btn bg-[#01a2a6] text-white"/>
                        </div>
                        <p><small>Already have an account? Please 
                            <Link className='text-[#01a2a6]' to="/login"> Login</Link></small></p>
                    </form>
                    <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;