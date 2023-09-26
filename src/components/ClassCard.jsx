
const ClassCard = ({oneClass}) => {
    const {instructor, courseName, coursePrice, seats, image} = oneClass;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className="h-[500px] w-full"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{courseName} <small className="text-sm">by {instructor}</small></h2>
                    <p>Available Seats: {seats}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-between">
                    <div className="stat-value">${coursePrice}</div>
                    <button className="btn bg-[#01a2a6] text-white">Select</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;