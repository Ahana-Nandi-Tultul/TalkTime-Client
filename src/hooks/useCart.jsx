import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const {user, loading} =  useAuth();
    const [instance] = useAxiosSecure();
    const {data: allselectedClasses = [], refetch} = useQuery({
        queryKey: [user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await instance(`/carts/${user?.email}`)
            // console.log(res?.data);
            return(res?.data);
        }
    })
    return [allselectedClasses, refetch]

};

export default useCart;