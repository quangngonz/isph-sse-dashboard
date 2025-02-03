import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {Button, Card, MenuItem, TextField} from "@mui/material";
import {Session} from "../../SessionContext";
import handleUserEdit from "./handleUserEdit";
import {useQueryClient} from "@tanstack/react-query";

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

export default function ModifyUserModal({open, setOpen, selectedUser, session}: ModifyUserModalProps) {
    const handleClose = () => setOpen(false);
    const authToken = session?.user?.token;
    const queryClient = useQueryClient();

    const [formData, setFormData] = React.useState({
        user_id: selectedUser?.user_id || "",
        username: selectedUser?.username || "",
        role: selectedUser?.role || "",
        house: selectedUser?.house || ""
    });

    React.useEffect(() => {
        if (selectedUser) {
            setFormData({
                user_id: selectedUser.user_id,
                username: selectedUser.username,
                role: selectedUser.role,
                house: selectedUser.house
            });
        }
    }, [selectedUser]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = () => {
        handleUserEdit(formData, session, authToken).then(async () => {
            // @ts-ignore
            await queryClient.invalidateQueries('users');
        });
        handleClose();
    };

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
                        Modifying user {selectedUser?.username}
                    </Typography>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <TextField
                            select
                            fullWidth
                            margin="normal"
                            label="Role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <MenuItem value="student">Student</MenuItem>
                            <MenuItem value="teacher">Teacher</MenuItem>
                            <MenuItem value="admin">Admin</MenuItem>
                        </TextField>
                        <TextField
                            select
                            fullWidth
                            margin="normal"
                            label="House"
                            name="house"
                            value={formData.house}
                            onChange={handleChange}
                        >
                            <MenuItem value="Rua Bien">Rua Bien</MenuItem>
                            <MenuItem value="Voi">Voi</MenuItem>
                            <MenuItem value="Te Giac">Te Giac</MenuItem>
                            <MenuItem value="Ho">Ho</MenuItem>
                        </TextField>
                        <Button onClick={handleClose} variant="outlined" sx={{mt: 2, mr: 1}}>Cancel</Button>
                        <Button type="submit" variant="contained" sx={{mt: 2}}>Save Changes</Button>
                    </form>
                </Card>
            </Fade>
        </Modal>
    );
}

type User = {
    user_id: string;
    id: string;
    username: string;
    house: string;
    role: string;
};

type ModifyUserModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    selectedUser: User | null;
    session: Session | null;
};
