import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '../../../assets/banner/banner1.jpg';
import banner2 from '../../../assets/banner/banner2.jpg';
import banner3 from '../../../assets/banner/banner3.jpg';
import banner4 from '../../../assets/banner/banner4.jpg';
import './Banner.css';
import { BiNotepad, BiUserPlus } from 'react-icons/bi';
import { FaHeadset } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import { Fade } from 'react-awesome-reveal';
const Banner = () => {
    const {isDarkMode} = useAuth();
    return (
        <div data-aos="fade-down">
            <div className='relative'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper h-[600px]"

                >
                    <SwiperSlide>
                        <div className="image" style={{ backgroundImage: `url(${banner1})` }}></div>                
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image" style={{ backgroundImage: `url(${banner2})` }}></div>                
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image" style={{ backgroundImage: `url(${banner3})` }}></div>                
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image" style={{ backgroundImage: `url(${banner4})` }}></div>                
                    </SwiperSlide>
                </Swiper>

                <div className="absolute top-0 left-0 right-0 bottom-0 md:w-3/12 w-1/2 mx-auto flex flex-col justify-center
                items-center p-6 z-10 text-center">
                    <Fade cascade>
                    <h2 className="text-5xl font-bold text-white">TalkTime</h2>
                    <p className="text-white text-xl mt-4">To have another language to possess a second identity. </p>
                    </Fade>
                </div>
            </div>
            <div className={`${isDarkMode ? 'bg-[#161655]' : 'bg-[#01a2a6]'}
            text-white grid grid-cols-1 md:grid-cols-3 p-16`}>
                <div className='w-2/3 mx-auto'>
                    <Fade cascade>
                        <BiNotepad className='h-10 w-10'></BiNotepad>
                        <h2 className='text-3xl text-yellow-200 mt-4'>Get Course</h2>
                        <p className='text-xl'>Find your ideal course</p>
                    </Fade>
                </div>
                <div className='w-2/3 mx-auto my-8 md:my-auto'>
                    <Fade cascade>
                        <FaHeadset className='h-10 w-10'></FaHeadset>
                        <h2 className='text-3xl text-yellow-200 mt-4'>Ask Question</h2>
                        <p className='text-xl'>Get best support from us.</p>
                    </Fade>
                </div>
                <div className='w-2/3 mx-auto'>
                    <Fade cascade>
                        <BiUserPlus className='h-10 w-10'></BiUserPlus>
                        <h2 className='text-3xl text-yellow-200 mt-4'>Join Today</h2>
                        <p className='text-xl'>Sign up now!</p>
                    </Fade>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;