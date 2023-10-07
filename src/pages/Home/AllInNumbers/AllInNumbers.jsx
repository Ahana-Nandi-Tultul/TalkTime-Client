import { useEffect, useState } from 'react';
import './AllInNumbers.css';
import { FiUsers } from 'react-icons/fi';
import { FaReadme } from 'react-icons/fa';
import { BiUserPin } from 'react-icons/bi';

const AllInNumbers = () => {
    const [info, setInfo] = useState({})
    useEffect(() => {
        fetch('http://localhost:3000/allinnumbers')
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [])
    return (
        <div className="featured-item text-base-200  my-20 bg-fixed  bg-[#00001a]">
            <div className="bg-black bg-opacity-60 h-full pb-20 pt-20 md:px-36 px-10">
                <h2 className='text-center text-5xl font-extralight mb-8'>TalkTime in Number</h2>
                <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className='bg-white bg-opacity-20 w-full flex justify-center p-10 border-base-200 border'>
                        <div className='space-y-4 text-center'>
                            <FiUsers className='h-10 w-10 text-base-300 mx-auto'/>
                            <h2 className='text-7xl'>{info?.stuResult}</h2>
                            <h2 className='uppercase font-bold text-center'>Students</h2>
                        </div>
                    </div>
                    <div className='bg-white bg-opacity-20 w-full flex justify-center p-10 border-base-200 border'>
                        <div  className='space-y-4 text-center'>
                            <BiUserPin className='h-10 w-10 text-base-300 mx-auto'/>
                            <h2 className='text-7xl'>{info?.insResult}</h2>
                            <h2 className='uppercase font-bold text-center'>Instructors</h2>
                        </div>
                    </div>
                    <div className='bg-white bg-opacity-20 w-full flex justify-center p-10 border-base-200 border'>
                        <div  className='space-y-4 text-center'>
                            <FaReadme className='h-10 w-10 text-base-300 mx-auto'/>
                            <h2 className='text-7xl'>{info?.courseResult}</h2>
                            <h2 className='uppercase font-bold text-center'>Courses</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllInNumbers;