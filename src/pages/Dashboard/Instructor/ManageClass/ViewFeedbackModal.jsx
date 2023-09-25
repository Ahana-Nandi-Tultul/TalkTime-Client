
const ViewFeedbackModal = ({openViewFeedbackModal, setOpenViewFeedbackModal, oneClassFeedback}) => {
    return (
        <>
        <div className={`fixed inset-0  items-center justify-center z-50 bg-black bg-opacity-50 
         ${openViewFeedbackModal ? 'flex' : 'hidden'}`}>
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2 w-3/4 relative">
          <button
              onClick={() => setOpenViewFeedbackModal(false)}
              className="btn btn-circle btn-outline absolute top-1 right-1"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="modal-box max-w-none w-full">
              <h2 className="text-xl font-bold mb-4">{oneClassFeedback.courseName}</h2>
              <p>{oneClassFeedback.feedback}</p>
            </div>
          </div>
        </div>
        </>
    );
};

export default ViewFeedbackModal;