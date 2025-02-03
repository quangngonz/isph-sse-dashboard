import * as React from 'react';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";

import {DataGrid, GridColDef, GridRowParams, GridToolbar} from '@mui/x-data-grid';

import {useUsers} from "../../hooks/useUsers";
import ModifyUserModal from "./modifyUserModal";
import {useSession} from "../../SessionContext";

const userPage = () => {
    const {data: users, isLoading, error, isFetching} = useUsers();
    const [selectedUser, setSelectedUser] = React.useState<typeof rows[0] | null>(null);
    const [open, setOpen] = React.useState<boolean>(false);
    const {session} = useSession();

    const handleRowClick = (params: GridRowParams) => {
        setSelectedUser(params.row);
    };

    const handleModifyUser = () => {
        setOpen(true);
    };


    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'Email', width: 250},
        {field: 'username', headerName: 'Username', width: 200},
        {field: 'house', headerName: 'House', width: 150},
        {field: 'role', headerName: 'Role', width: 150},
        {field: 'user_id', headerName: 'User ID', width: 150},
        {
            field: 'modifyUserButton',
            headerName: 'Modify User',
            width: 150,
            renderCell: (params) => {
                return (
                    <Button onClick={handleModifyUser}>Modify User</Button>
                );
            }
        },
    ];


    const rows = users?.map((transaction) => ({
        id: transaction.email,
        username: transaction.username,
        house: transaction.house,
        role: transaction.role,
        user_id: transaction.user_id,
    })) || [];

    return (
        <Paper style={{height: 'auto', width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                loading={isLoading || isFetching}
                slots={{toolbar: GridToolbar}}
                slotProps={{toolbar: {showQuickFilter: true}}}
                pageSizeOptions={[5, 10, 25]}
                onRowClick={handleRowClick}
            />
            <ModifyUserModal open={open} setOpen={setOpen} selectedUser={selectedUser} session={session}/>
        </Paper>
    );
};

export default userPage;
