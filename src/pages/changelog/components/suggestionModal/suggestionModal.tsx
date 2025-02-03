import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {Button, Card, TextField} from "@mui/material";
import handleSuggestion from "./handleSuggestion";
import Alert from "@mui/material/Alert";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    maxWidth: '800px',
    height: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function SuggestionModal({open, setOpen, setSuccess}: SuggestionModalProps) {
    const handleClose = () => setOpen(false);
    const [suggestion, setSuggestion] = React.useState("");
    const [error, setError] = React.useState("");

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{backdrop: Backdrop}}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Card sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Suggest a Feature
                    </Typography>
                    {error && (<Alert severity="error" sx={{mt: 2, wordWrap: 'break-word'}}>{error}</Alert>)}
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSuggestion({suggestion, setSuggestion, handleClose, setError, setSuccess});
                    }}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Suggestion"
                            name="suggestion"
                            value={suggestion}
                            onChange={(e) => setSuggestion(e.target.value)}
                            multiline
                            rows={10}
                        />
                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '16px'}}>
                            <Button onClick={handleClose} variant="outlined" sx={{mr: 1}}>Cancel</Button>
                            <Button type="submit" variant="contained">Submit Suggestion</Button>
                        </div>
                    </form>
                </Card>
            </Fade>
        </Modal>
    );
}

type SuggestionModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    setSuccess: (success: boolean) => void;
};
