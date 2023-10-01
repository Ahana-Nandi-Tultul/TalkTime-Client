import img1 from '../assets/banner2nd.jpg';
const Banner2nd = ({heading}) => {
    return (
        <div className='relative'>
            <div className=' w-full'>
                <img src={img1} alt="" className="h-[500px] w-full" />
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0  mx-auto flex flex-col 
            justify-center items-center p-6 z-10 text-center bg-black bg-opacity-50">
                <h2 className="text-5xl font-bold text-white">{heading}</h2>
            </div>
        </div>
    );
};

export default Banner2nd;