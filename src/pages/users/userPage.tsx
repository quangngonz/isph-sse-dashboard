import * as React from 'react';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";

import {DataGrid, GridColDef, GridRowParams, GridToolbar} from '@mui/x-data-grid';

import {useUsers} from "../../hooks/useUsers";
import ModifyUserModal from "./modifyUserModal";

const userPage = () => {
    const {data: users, isLoading, error} = useUsers();
    const [selectedUser, setSelectedUser] = React.useState<typeof rows[0] | null>(null);
    const [open, setOpen] = React.useState<boolean>(false);

    const handleRowClick = (params: GridRowParams) => {
        setSelectedUser(params.row);
    };

    const handleModifyUser = (userId: string) => {
        console.log(`Modify user button clicked for ${userId}`);
        setOpen(true);
    };


    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'User', width: 150},
        {field: 'username', headerName: 'Username', width: 200},
        {field: 'house', headerName: 'House', width: 150},
        {field: 'role', headerName: 'Role', width: 150},
        {
            field: 'modifyUserButton',
            headerName: 'Modify User',
            width: 150,
            renderCell: (params) => {
                return (
                    <Button onClick={() => handleModifyUser(params.row.username)}>Modify User</Button>
                );
            }
        },
    ];


    const rows = users?.map((transaction) => ({
        id: transaction.user_id,
        username: transaction.username,
        house: transaction.house,
        role: transaction.role,
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
                onRowClick={handleRowClick}
            />
            <ModifyUserModal open={open} setOpen={setOpen} selectedUser={selectedUser}/>
        </Paper>
    );
};

export default userPage;
