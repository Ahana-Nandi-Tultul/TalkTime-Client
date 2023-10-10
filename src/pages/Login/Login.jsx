import { Link, useLocation, useNavigate } from 'react-router-dom';
import image1 from '../../assets/crop_authentication.png';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from '../../components/SocialLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {login, isDarkMode, loading} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) =>{
        console.log(data)
        login(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully! You have logged in your account.',
                showConfirmButton: false,
                timer: 1500
              });
            if(!loading){

                navigate(from, {replace: true})
            }  
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                title: 'Error!',
                text: `${error?.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
      } 
    return (
        <>
            <div className="hero min-h-screen" data-aos="fade-down">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={image1} alt="" />
                    </div>
                    <div className={`card flex-shrink-0 w-full max-w-sm shadow-2xl 
                    ${isDarkMode ? 'bg-[#18185a] text-white' : 'bg-base-100 text-black'}`}>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                        <h1 className="text-3xl text-center font-bold">Please Login!</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Email</span>
                        </label>
                        <input type="text" placeholder="email" className={`input input-bordered
                        ${isDarkMode ? 'bg-[#00001a] text-white' : 'bg-base-100 text-black'}
                        `}
                        {...register("email", { required: true })} required/>
                         {errors.name && <span>Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Password</span>
                            </label>
                            <div className="relative">
                                <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className={`input input-bordered w-full
                                ${isDarkMode ? 'bg-[#00001a] text-white' : 'bg-base-100 text-black'}`}
                                {...register("password", { required: true })} required/>
                                <span
                                className={`absolute inset-y-0 right-0 px-3 py-2 btn bg-transparent border-0
                                ${isDarkMode ? 'text-white' : ''}`}
                                onClick={() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && <span>Name field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value="Login" className="btn bg-[#01a2a6] text-white"/>
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