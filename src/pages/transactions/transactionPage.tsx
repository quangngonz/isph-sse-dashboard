import * as React from 'react';
import Paper from '@mui/material/Paper';
import {DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid';
import {useTransactions} from '../../hooks/useTransactions';

const TransactionPage = () => {
    const {data: transactions, isLoading, error} = useTransactions();

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const formatDate = (timestamp: string | number | Date) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-GB', {hour12: false}) + ' ' + date.toLocaleDateString('en-GB');
    };

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'Time', width: 200},
        {field: 'username', headerName: 'User', width: 150},
        {field: 'transaction_type', headerName: 'Type', width: 130},
        {field: 'quantity', headerName: 'Quantity', type: 'number', width: 110},
        {field: 'stock_ticker', headerName: 'Stock', width: 130},
    ];


    const rows = transactions?.map((transaction) => ({
        id: formatDate(transaction.timestamp),
        username: transaction.user.username,
        transaction_type: transaction.transaction_type,
        quantity: transaction.quantity,
        stock_ticker: transaction.stock_ticker,
    })) || [];

    return (
        <Paper style={{height: 'auto', width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                loading={isLoading}
                slots={{toolbar: GridToolbar}}
                slotProps={{toolbar: {showQuickFilter: true}}}
                pageSizeOptions={[5, 10, 25]}
            />
        </Paper>
    );
};

export default TransactionPage;
