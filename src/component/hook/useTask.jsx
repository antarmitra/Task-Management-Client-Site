import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { data: add = [], refetch } = useQuery({
        queryKey: ['add', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/adds?email=${user?.email}`);
            // const res = await axiosPublic.get(`/adds/user?email=${user?.email}`);
            // console.log(res.data);
            return res.data;
        }
    })


    return [add, refetch]
}

export default useTask;