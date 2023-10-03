import React from 'react';
import logo2 from '../../../assets/logo2.png';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaFacebookMessenger } from "react-icons/fa";
import moment from 'moment/moment';

const Footer = () => {
    return (
        <div className=' bg-black md:px-20 px-6 text-white py-20' data-aos="slide-up">
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div>
                    <img src={logo2} alt="" />
                    <p className='text-white mt-4'>Get you favourite Miniature Musical Instruments.</p>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>Company</h2>
                    <p>About Us</p>
                    <p>Latest</p>
                    <p>News</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>Product</h2>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>Contact</h2>
                    <p>555 4th 5t NW, Washington</p>
                    <p>+88 01750 000 000</p>
                </div>
            </div>
             <hr className='my-16'/>
            <div className='flex justify-center'>
                <div>
                    <button className="btn btn-circle bg-white btn-outline mr-2">
                        <FaFacebookF className='w-6 h-6'/>
                    </button>
                    <button className="btn btn-circle bg-white btn-outline mr-2">
                        <FaTwitter className='w-6 h-6'/>
                    </button>
                    <button className="btn btn-circle bg-white btn-outline mr-2">
                        <FaGooglePlusG className='w-6 h-6'/>
                    </button>
                    <button className="btn btn-circle bg-white btn-outline">
                        <FaFacebookMessenger className='w-6 h-6'/>
                    </button>
                </div>
            </div>
            <p className='text-center'>@Copyright {moment().format("YYYY")}. All rights reserved.</p>
        </div>
    );
};

export default Footer;