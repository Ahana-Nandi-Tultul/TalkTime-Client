
const UpdateClassModal = ({oneClassUpdate, handleClassUpdate, openUpdateClassModal, setOpenUpdateClassModal, isDarkMode}) => {
    return (
        <>
        <div className={`fixed inset-0  items-center justify-center z-50 bg-black bg-opacity-50
          ${openUpdateClassModal ? 'flex' : 'hidden'}`}>
          <div className={` p-6 rounded-lg shadow-lg md:w-1/2 w-3/4 relative
          ${isDarkMode ?  "bg-black" : "bg-white"}`}>
          <button
              onClick={() => setOpenUpdateClassModal(false)}
              className= {`btn btn-circle btn-outline absolute top-1 right-1
              ${isDarkMode ? 'bg-white' : ''}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className={`modal-box max-w-none w-full 
            ${isDarkMode ? "bg-[#18185a] text-white" : "bg-white text-black"}`}>
              <h2 className="text-xl font-bold mb-4">Update {oneClassUpdate.courseName}</h2>
              <hr />
              <form onSubmit={() => handleClassUpdate(oneClassUpdate)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Class Name*</span>
                        </label>
                        <input type="text" defaultValue={oneClassUpdate?.courseName} name="courseName"
                            className={`input input-bordered
                        ${isDarkMode ? 'bg-[#00001a] text-white' : 'bg-base-100 text-black'}
                        `} required />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Price*</span>
                        </label>
                        <input type="number" defaultValue={oneClassUpdate?.coursePrice} name="coursePrice"
                        className={`input input-bordered
                        ${isDarkMode ? 'bg-[#00001a] text-white' : 'bg-base-100 text-black'}
                        `} required />
                    </div>
                </div>
                    <div className="form-control w-full mb-7">
                        <label className="label"> 
                            <span className={`label-text ${isDarkMode ? 'text-white' :
                            'text-black'}`}>Available Seats*</span>
                        </label>
                        <input type="text" defaultValue={oneClassUpdate?.seats} name="seats"
                        className={`input input-bordered
                        ${isDarkMode ? 'bg-[#00001a] text-white' : 'bg-base-100 text-black'}
                        `} required/>
                    </div>
                <input type= 'submit' value="Submit" className="btn bg-[#01a2a6] text-white" />
              </form>
            </div>
          </div>
        </div>
        </>
    );
};

export default UpdateClassModal;