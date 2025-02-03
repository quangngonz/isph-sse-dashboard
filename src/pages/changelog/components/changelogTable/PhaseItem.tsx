import * as React from 'react';
import Typography from "@mui/material/Typography";
import {ListItem, ListItemText} from '@mui/material';

type PhaseItemProps = {
    date: string;
    user: string;
    descriptions: string[];
};

const PhaseItem: React.FC<PhaseItemProps> = ({date, user, descriptions}) => {
    return (
        <ListItem style={{padding: '8px 0'}}> {/* Add padding */}
            <ListItemText
                primary={
                    <>
                        <Typography variant="subtitle1" component="span">
                            {date} - {user}
                        </Typography>
                    </>
                }
                secondary={
                    <ul>
                        {descriptions.map((desc, index) => (
                            <li key={index}>
                                <Typography variant="body1">{desc}</Typography>
                            </li>
                        ))}
                    </ul>
                }
            />
        </ListItem>
    );
};

export default PhaseItem;
