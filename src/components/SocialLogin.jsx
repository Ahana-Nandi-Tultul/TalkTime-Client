import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="p-4">
            <div className="divider"></div>
            <div className="flex justify-center items-center my-4">
                <button className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;