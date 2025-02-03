const API_ROOT = import.meta.env.VITE_API_ROOT;

interface SuggestionHandlerProps {
    suggestion: string;
    setSuggestion: (value: string) => void;
    handleClose: () => void;
    setError: (message: string) => void;
    setSuccess: (value: boolean) => void;
}

const handleSuggestion = ({suggestion, setSuggestion, handleClose, setError, setSuccess}: SuggestionHandlerProps) => {
    const session = localStorage.getItem('session');

    if (!session) {
        console.error("No session found");
        setError('Please log in to submit a suggestion.');
        return;
    }

    if (!suggestion) {
        console.error("No suggestion found");
        setError('Please provide a detailed description of the feature you would like to see.')
        return;
    }

    const sender_data = JSON.parse(session);

    const data = {
        sender: sender_data.user,
        suggestion: suggestion,
    }

    console.log("Data:", data);
    // TODO: Implement API call to send suggestion

    setSuggestion("");
    setSuccess(true);
    setError("");
    handleClose();
}

export default handleSuggestion;
