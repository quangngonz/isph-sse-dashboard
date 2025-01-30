import {useQuery} from "@tanstack/react-query";

const API_URL = "https://isph-sse.vercel.app/admin/get-all-users";


export type User = {
    username: string;
    house: string;
    role: string;
    user_id: string;
}


const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch transactions");
    }

    return response.json();
};

export const useUsers = () => {
    return useQuery({
        queryKey: ["users"], // Key to identify this query
        queryFn: fetchUsers,
        staleTime: 5000, // Cache is considered fresh for 5s
        refetchInterval: 10000, // Refetch every 10s
    });
};
