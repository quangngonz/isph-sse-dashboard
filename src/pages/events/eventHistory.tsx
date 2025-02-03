import * as React from "react";
import useAllEvents from "../../hooks/useAllEvents";
import "./EventHistory.css";

const EventHistory = () => {
    const {data: events, isLoading} = useAllEvents();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!events) {
        return <div>No events found</div>;
    }

    return (
        <div className="event-history-container">
            <h1 className="event-history-title">Events Table</h1>
            <table className="event-history-table">
                <thead>
                <tr className="event-history-header-row">
                    <th className="event-history-header-cell">Timestamp</th>
                    <th className="event-history-header-cell">Event ID</th>
                    <th className="event-history-header-cell">Event Name</th>
                    <th className="event-history-header-cell">Event Description</th>
                    <th className="event-history-header-cell">Created By User ID</th>
                    <th className="event-history-header-cell">Evaluated</th>
                    <th className="event-history-header-cell">Approved</th>
                    <th className="event-history-header-cell">Processed</th>
                </tr>
                </thead>
                <tbody>
                {events.map((event, index) => (
                    <tr key={index} className="event-history-row">
                        <td className="event-history-cell">{new Date(event.timestamp).toLocaleString()}</td>
                        <td className="event-history-cell">{event.event_id}</td>
                        <td className="event-history-cell">{event.event_name}</td>
                        <td className="event-history-cell">{event.event_description}</td>
                        <td className="event-history-cell">{event.created_by_user_id}</td>
                        <td className="event-history-cell">{event.evaluated ? '✅' : '❌'}</td>
                        <td className="event-history-cell">{event.approved ? '✅' : '❌'}</td>
                        <td className="event-history-cell">{event.processed ? '✅' : '❌'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventHistory;
