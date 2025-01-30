import {useQuery} from "@tanstack/react-query";

const API_URL = "https://isph-sse.vercel.app/admin/get-all-transactions";

export type Transaction = {
    id: string;
    quantity: number;
    status: string;
    stock_ticker: string;
    timestamp: number;
    transaction_type: "buy" | "sell";
    user: {
        house: string;
        user_id: string;
        username: string;
    };
};


const fetchTransactions = async (): Promise<Transaction[]> => {
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

export const useTransactions = () => {
    return useQuery({
        queryKey: ["transactions"], // Key to identify this query
        queryFn: fetchTransactions,
        staleTime: 5000, // Cache is considered fresh for 5s
        refetchInterval: 10000, // Refetch every 10s
    });
};
