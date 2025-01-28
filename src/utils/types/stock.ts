interface Stock {
    color: string;
    current_price: number;
    full_name: string;
    initial_price: string;
    market_cap: string;
    price_noise_factor: string;
    sector: string;
    stock_name: string;
    total_volume: string;
    volume_available: number;
}

interface StockData {
    [key: string]: Stock;
}

export type { Stock, StockData };
