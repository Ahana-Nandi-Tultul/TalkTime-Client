
const FeedbackModal = ({openModal, setOpenModal, oneClass, handleSetFeedback}) => {
   
    return (
        <>
        <div className={`fixed inset-0  items-center justify-center z-50 bg-black bg-opacity-50  ${openModal ? 'flex' : 'hidden'}`}>
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2 w-3/4 relative">
          <button
              onClick={() => setOpenModal(false)}
              className="btn btn-circle btn-outline absolute top-1 right-1"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="modal-box max-w-none w-full">
              <h2 className="text-xl font-bold mb-4">{oneClass.courseName}</h2>
              <hr />
              <form onSubmit={() => handleSetFeedback(oneClass)}>
                    <div className="form-control w-full mt-10 mb-6">
                        <label className="label">
                            <span className="label-text">Feedback</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full" name="feedback" defaultValue={oneClass?.feedback}></textarea>                    
                    </div>
                    <input type= 'submit' value="Submit" className="btn bg-[#01a2a6] text-white" />
              </form>
            </div>
          </div>
        </div>
        </>
    );
};

export default FeedbackModal;