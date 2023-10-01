import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SelectedClasses = () => {
    const {user} = useState({});
    const [instance] = useAxiosSecure()
    // const {data: allselectedClasses = [], refetch} = useQuery({
    //     queryKey: ,
    //     queryFn: async() => {
    //         const res = await instance(`/`)
    //     }
    // })
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-10">Number of Selected Classes: </h2>
        </div>
    );
};

export default SelectedClasses;