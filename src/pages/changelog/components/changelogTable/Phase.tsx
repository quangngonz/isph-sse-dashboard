import * as React from 'react';
import Typography from "@mui/material/Typography";
import PhaseItem from './PhaseItem';
import {Accordion, AccordionDetails, AccordionSummary, Card, Divider, List,} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type PhaseProps = {
    phase_name: string;
    phase_items: {
        date: string;
        user: string;
        descriptions: string[];
    }[];
};

const Phase: React.FC<PhaseProps> = ({phase_name, phase_items}) => {
    const [expanded, setExpanded] = React.useState(true);

    const handleChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Card variant="outlined" style={{marginBottom: '20px'}}>
            <Accordion expanded={expanded} onChange={handleChange}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel-content"
                    id="panel-header"
                >
                    <Typography variant="h5">{phase_name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider/>
                    <List>
                        {phase_items.map((item, index) => (
                            <React.Fragment key={index}>
                                <PhaseItem {...item} />
                                {index < phase_items.length - 1 && <Divider/>}
                            </React.Fragment>
                        ))}
                    </List>
                </AccordionDetails>
            </Accordion>
        </Card>
    );
};

export default Phase;
