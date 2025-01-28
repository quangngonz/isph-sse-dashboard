import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface Stock {
    id: string;
    full_name: string;
    current_price: number;
    initial_price: string;
    market_cap: string;
    sector: string;
    total_volume: string;
    volume_available: string;
}

const useStockData = () => {
    const [data, setData] = useState<Stock[]>([]);

    const { isPending, error } = useQuery({
        queryKey: ["repoData"],
        queryFn: async () => {
            const res = await fetch("https://isph-sse.vercel.app/stocks");
            const json = await res.json();
            setData(json);
            return json;
        },
    });

    const rows = data.length > 0 ? Object.keys(data[0]).map((key) => {
        const stock = data[0][key] as Stock;
        return {
            id: key,
            full_name: stock.full_name,
            current_price: stock.current_price,
            initial_price: stock.initial_price,
            market_cap: stock.market_cap,
            sector: stock.sector,
            total_volume: stock.total_volume,
            volume_available: stock.volume_available,
        };
    }) : [];

    return { isPending, error, rows };
};

export default useStockData;
