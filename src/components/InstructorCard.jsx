import { MdOutlineNumbers } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const InstructorCard = ({instructorInfo}) => {
    const {_id, instructor, photo, email,  courseNames} = instructorInfo;
    const {isDarkMode} = useAuth();
    
    return (
        <div className={`card shadow-xl
        ${isDarkMode ? 'bg-[#18185a] text-white' : 'bg-base-100 text-black'}`}>
        <figure className="px-10 pt-10 avatar">
            <div className="rounded-xl h-[250px]">
                <img src={photo} alt="Shoes" className="rounded-[50%] h-full" />
            </div>
        </figure>
        <div className="card-body">
            <div className="text-center">
                <h2 className="text-xl font-bold">{instructor}</h2>
                <p className="text-slate-300"><small>{email}</small></p>
            </div>
            <div>
                <p className="text-left font-semibold">Classes: </p>
                <ul className="">
                    {
                        courseNames.map((name, index) => <li key={index}>{index + 1}. {name}</li>)
                    }
                </ul>
            </div>
            <div className="divider"></div>
            <div className="card-actions items-center justify-between">
                <div className='flex items-center'><MdOutlineNumbers className="w-6 h-6"/> {courseNames.length} classes</div>
            <Link to={`/instructorClasses/${_id}`}><button className={`btn bg-[#01a2a6] text-white`}>See Classes</button></Link>
            </div>
        </div>
        </div>
    );
};

export default InstructorCard;