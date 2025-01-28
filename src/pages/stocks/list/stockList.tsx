import * as React from 'react';

import Paper from '@mui/material/Paper';

import { DataGrid, GridToolbar, GridRowParams } from '@mui/x-data-grid';
import useStockData from "../../../hooks/useStockData";

import './stockList.css';

export default function StockList() {
    const { isPending, error, columns, rows } = useStockData();
    const [selectedStock, setSelectedStock] = React.useState<typeof rows[0]| null>(null);

    const handleRowClick = (params: GridRowParams) => {
        setSelectedStock(params.row);
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Paper style={{ height: 'auto', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                loading={isPending || !columns || !rows}
                onRowClick={handleRowClick}
                slots={{
                    toolbar: GridToolbar,
                }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
            {selectedStock && (
                <div>
                    <h3>Selected Stock:</h3>
                    <p>Ticker: {selectedStock.id}</p>
                    <p>Full Name: {selectedStock.full_name}</p>
                </div>
            )}
        </Paper>
    );
}
