import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img1 from '../../../assets/404.png'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className='text-center grid grid-cols-1
         md:grid-cols-2 items-center py-20 gap-4 bg-[#00001a] text-white'>
            <div> 
                <h1 className='text-5xl'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>Page {error.statusText || error.message}</i>
                </p>
                <Link to='/'><button className='btn bg-[#01a2a6] text-white mt-4'>Return Home</button></Link>
            </div>
            <div>
                <img src={img1} alt="" className='h-[500px]'/>
            </div>
        </div>
    );
};

export default ErrorPage;