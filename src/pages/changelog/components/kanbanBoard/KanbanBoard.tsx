import * as React from 'react';
import {kabanBoardData} from '../../data/kabanBoardData';
import {Box, Card, CardContent, Divider, Typography,} from '@mui/material';
import Grid from '@mui/material/Grid2';

const KanbanBoard = () => {
    // @ts-ignore
    return (
        <Box sx={{padding: '20px', overflowX: 'auto'}}>
            <Grid container spacing={2} wrap="nowrap">
                {kabanBoardData.lanes.map((lane) => (
                    <Grid item key={lane.id} xs={12} sm={6} md={4} lg={3} sx={{minWidth: lane.style.width}}>
                        <Typography variant="h6" gutterBottom>
                            {lane.label}
                        </Typography>
                        <Divider/>
                        <Box sx={{mt: 2}}>
                            {lane.cards.map((card) => (
                                <Card key={card.id} sx={{mb: 2}}>
                                    <CardContent>
                                        <Typography variant="body1">{card.title}</Typography>
                                        {card.description && (
                                            <Typography variant="body2" color="text.secondary">
                                                {card.description}
                                            </Typography>
                                        )}
                                        {card.label && (
                                            <Typography variant="caption" color="text.secondary">
                                                {card.label}
                                            </Typography>
                                        )}
                                        {card.metadata && (
                                            <Typography variant="caption" color="text.secondary">
                                                {card.metadata}
                                            </Typography>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default KanbanBoard;
