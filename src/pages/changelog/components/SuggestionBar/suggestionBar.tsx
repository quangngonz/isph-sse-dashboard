import {Button, Grow, Snackbar} from "@mui/material";
import * as React from "react";
import Alert from "@mui/material/Alert";

interface GrowSnackbarProps {
    handleOpen: () => void;
    autoHideDuration?: number;
    success: boolean;
    setSuccess: (success: boolean) => void;
}

function SuggestionBar({handleOpen, autoHideDuration = 3000, success, setSuccess}: GrowSnackbarProps) {

    const handleClose = () => {
        setSuccess(false);
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="primary" style={{margin: '0 20px'}}>
                Suggest Feature
            </Button>
            <Snackbar open={success} autoHideDuration={autoHideDuration} onClose={handleClose}
                      key="grow-transition"
                      TransitionComponent={Grow}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{width: '100%'}}
                >
                    Suggestion Sent! Thank you for your feedback!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default SuggestionBar;