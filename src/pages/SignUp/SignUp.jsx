import { Link } from 'react-router-dom';
import image1 from '../../assets/crop_authentication.png';
import SocialLogin from '../../components/SocialLogin';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={image1} alt="" className='w-full' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body pb-0">
                        <h1 className="text-3xl text-center font-bold">Please Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" placeholder="phone number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='flex items-center'>
                                    <input type="radio" name="radio-2" className="radio radio-primary" />
                                    <span className='ml-1'>Male</span>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" name="radio-2" className="radio radio-primary" />
                                    <span className='ml-1'>Female</span>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" name="radio-2" className="radio radio-primary" />
                                    <span className='ml-1'>Other</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className="input input-bordered w-full" // Added padding for the eye icon
                                />
                                <span
                                className="absolute inset-y-0 right-0 px-3 py-2 btn bg-transparent border-0"
                                onClick={() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="confirm password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#01a2a6] text-white">Sign up</button>
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