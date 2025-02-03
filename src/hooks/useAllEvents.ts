import {useQuery} from "@tanstack/react-query";
import Event from "../utils/types/event";

const API_ROOT = import.meta.env.VITE_API_ROOT;
const API_URL = `${API_ROOT}/admin/get-all-events`;

const fetchEvents = async (): Promise<Event[]> => {
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch events");
    }

    return Object.values(await response.json());
};

export const useAllEvents = () => {
    return useQuery({
        queryKey: ["events"], // Key to identify this query
        queryFn: fetchEvents,
        staleTime: 5000, // Cache is considered fresh for 5s
        refetchInterval: 10000, // Refetch every 10s
    });
};

export default useAllEvents;
