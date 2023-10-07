import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import moment from "moment";
import { useState } from "react";


const PaymentHistory = () => {
    const {user, isDarkMode} = useAuth();
    const [instance] = useAxiosSecure();
    const [payHistory, setPayHistory] = useState([]);
    const {data = []} = useQuery({
        queryKey: ['payments/history', user?.email],
        queryFn: async() => {
            const res = await instance(`/payments/history/${user?.email}`);
            setPayHistory(res?.data);
            return res?.data;
        }
    });
    
    return (
        <div className="w-full p-4">
            <h2 className="text-center text-3xl my-10 font-semibold">My Payment History </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                    <tr className={`${isDarkMode ? "text-white" : "text-black"}`}>
                        <th>#</th>
                        <th>Transaction Id</th>
                        <th>Course Names</th>
                        <th>Payment Info</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        payHistory.map((pay, index) => <tr key={pay._id}>
                            <th>{index + 1}</th>
                            <td>{pay.transactionId}</td>
                            <td>{
                                pay.courseNames.map((name, index) => <span key={index}>{index + 1}. {name}<br/></span>)
                                }</td>
                            <td>Date: {moment(pay.date).format("dddd, MMMM Do YYYY, h:mm:ss a")} <br/>
                            Total Price: ${pay.price}</td>

                        </tr>)
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory; 