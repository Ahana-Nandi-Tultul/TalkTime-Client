import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdminOrInstructor = () => {
    const {user, loading} = useAuth();
    const [instance] = useAxiosSecure();
    const {data: isAdminOrIns = false, isAdminOrInsLoading } = useQuery({
        queryKey: ['users', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await instance.get(`/users/${user?.email}`)
            // console.log(res?.data);
            return res?.data
        }
    }) 
    return [isAdminOrIns, isAdminOrInsLoading];
};

export default useAdminOrInstructor;