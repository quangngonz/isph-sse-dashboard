import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {GridColDef} from "@mui/x-data-grid";

import type {StockData } from "../utils/types/stock";

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Ticker',
        width: 100,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'full_name',
        headerName: 'Full Name',
        width: 200
    },
    {
        field: 'current_price',
        headerName: 'Current Price',
        type: 'number',
        width: 130,
        align: 'center',
        headerAlign: 'center',
        cellClassName: (params) => {
            const currentPrice = parseFloat(params.value);
            const initialPrice = parseFloat(params.row.initial_price);

            if (currentPrice > initialPrice) {
                return 'price-up';
            } else if (currentPrice < initialPrice) {
                return 'price-down';
            } else {
                return 'price';
            }
        },
    },
    {
        field: 'initial_price',
        headerName: 'Initial Price',
        type: 'number',
        width: 100,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'market_cap',
        headerName: 'Market Cap',
        type: 'number',
        width: 150,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'sector',
        headerName: 'Sector',
        width: 150
    },
    {
        field: 'total_volume',
        headerName: 'Total Volume',
        type: 'number',
        width: 150,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'volume_available',
        headerName: 'Volume Available',
        type: 'number',
        width: 150,
        align: 'center',
        headerAlign: 'center'
    },
];

const useStockData = () => {
    const [data, setData] = useState<StockData | undefined>(undefined);

    const { isPending, error } = useQuery({
        queryKey: ["stocksData"],
        queryFn: async () => {
            const res = await fetch("https://isph-sse.vercel.app/stocks");
            const json: StockData = await res.json();
            setData(json);
            return json;
        },
        refetchInterval: 10000,
    });

    // Map over the keys (stock symbols) of the data object
    const rows = data
        ? Object.keys(data).map((symbol) => ({
            id: symbol, // Use the stock symbol as the id
            ...data[symbol], // Spread the rest of the stock data
        }))
        : [];

    return { isPending, error, columns, rows };
};

export default useStockData;
