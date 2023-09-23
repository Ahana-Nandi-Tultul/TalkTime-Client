import { Link } from 'react-router-dom';
import image1 from '../../assets/crop_authentication.png';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from '../../components/SocialLogin';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={image1} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body pb-0">
                        <h1 className="text-3xl text-center font-bold">Please Login!</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className="input input-bordered w-full"
                                />
                                <span
                                className="absolute inset-y-0 right-0 px-3 py-2 btn bg-transparent border-0"
                                onClick={() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#01a2a6] text-white">Login</button>
                        </div>
                        <p><small>New to TalkTime? Please 
                            <Link className='text-[#01a2a6]' to="/signup"> Sign Up</Link></small></p>
                    </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;