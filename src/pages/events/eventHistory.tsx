import * as React from "react";
import useAllEvents from "../../hooks/useAllEvents";
import {DataGrid, GridColDef, GridToolbar} from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import {CircularProgress} from "@mui/material";

const EventHistory = () => {
    const {data: events, isLoading} = useAllEvents();
    const [selectedEvent, setSelectedEvent] = React.useState<any>(null);

    if (!events) {
        return (
            <div style={{display: 'flex', height: '5%', alignItems: 'center', justifyContent: 'center'}}>
                <CircularProgress/> &nbsp; Loading...
            </div>
        );
    }

    const columns: GridColDef[] = [
        {field: "id", headerName: "Event ID", width: 120},
        {
            field: "timestamp",
            headerName: "Timestamp",
            width: 180,
            renderCell: (params) => new Date(params.value as string).toLocaleString(),
        },
        {field: "event_name", headerName: "Event Name", width: 150},
        {field: "event_description", headerName: "Event Description", width: 250},
        {field: "created_by_user_id", headerName: "Created By User ID", width: 180},
        {
            field: "evaluated", headerName: "Evaluated", width: 100, renderCell: (params) => (
                <div style={{textAlign: "center"}}>
                    {params.value ? '✅' : '❌'}
                </div>)
        },
        {
            field: "approved", headerName: "Approved", width: 100, renderCell: (params) => (
                <div style={{textAlign: "center"}}>
                    {params.value ? '✅' : '❌'}
                </div>)
        },
        {
            field: "processed", headerName: "Processed", width: 100, renderCell: (params) => (
                <div style={{textAlign: "center"}}>
                    {params.value ? '✅' : '❌'}
                </div>)
        },
    ];

    const rows = events.map((event) => {
        return {
            id: event.event_id,
            timestamp: event.timestamp,
            event_name: event.event_name,
            event_description: event.event_description,
            created_by_user_id: event.created_by_user_id,
            evaluated: event.evaluated,
            approved: event.approved,
            processed: event.processed,
        };
    });

    const handleRowClick = (params: { row: any; }) => {
        console.log(params.row);
        setSelectedEvent(params.row);
    }

    return (
        <>
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
            </Paper>
            {selectedEvent && (
                <div>
                    <h2>Selected Event</h2>
                    <pre>{JSON.stringify(selectedEvent, null, 2)}</pre>
                </div>
            )}
        </>
    );
};

export default EventHistory;
