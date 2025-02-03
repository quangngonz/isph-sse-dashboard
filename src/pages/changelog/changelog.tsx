import * as React from 'react';
import ChangelogTable from "./components/changelogTable/ChangelogTable";
import SuggestionModal from './components/suggestionModal/suggestionModal';
import SuggestionBar from "./components/SuggestionBar/suggestionBar";
import KanbanBoard from "./components/kanbanBoard/KanbanBoard";

const Changelog = () => {
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <div>
            <SuggestionBar handleOpen={handleOpen} success={success} setSuccess={setSuccess}/>
            <KanbanBoard/>
            <ChangelogTable/>
            <SuggestionModal open={open} setOpen={setOpen} setSuccess={setSuccess}/>
        </div>
    );
}

export default Changelog;
