import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {Button, Card} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function ModifyUserModal({open, setOpen, selectedUser}: ModifyUserModalProps) {
    const handleClose = () => setOpen(false);

    return (
        <div>
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
                            Modifying user {selectedUser?.username}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{m: 2}}>
                            <UserInfo selectedUser={selectedUser}/>
                            {/*// TODO: Add form to modify user*/}
                        </Typography>
                        <Button onClick={handleClose} variant="contained">Close</Button>
                    </Card>
                </Fade>
            </Modal>
        </div>
    );
}

function UserInfo({selectedUser}: { selectedUser: User | null }) {
    return (
        <Typography>
            {selectedUser ? (
                <>
                    Modifying for <strong>{selectedUser.username}</strong> who is
                    a <strong>{selectedUser.role}</strong> from <strong>{selectedUser.house}</strong>
                </>
            ) : (
                "No user selected"
            )}
        </Typography>
    );
}

type User = {
    id: string;
    username: string;
    house: string;
    role: string;
};

type ModifyUserModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    selectedUser: User | null;
};

