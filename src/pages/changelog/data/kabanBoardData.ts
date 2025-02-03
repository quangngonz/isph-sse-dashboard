export interface Card {
    id: string;
    title: string;
    description: string;
    label: string;
    metadata: string;
}

export interface Lane {
    id: string;
    label: string;
    style: {
        width: number;
    };
    cards: Card[];
}

export interface Table {
    lanes: Lane[];
}

export const kabanBoardData: Table = {
    lanes: [
        {
            id: 'Backlog',
            label: 'Backlog',
            style: {width: 200},
            cards: [
                {
                    id: '🤞 This Card is todo - but the team is not committed to completing it yet',
                    title:
                        '🤞 This Card is todo - but the team is not committed to completing it yet',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Create API to return Data from Database',
                    title: 'Create API to return Data from Database',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Create Engine Running the Stock Exchange',
                    title: 'Create Engine Running the Stock Exchange',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Create Stock Ticker',
                    title: 'Create Stock Ticker',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Front End',
                    title: 'Front End',
                    description: '',
                    label: '',
                    metadata: '',
                },
            ],
        },
        {
            id: 'Next Sprint',
            label: 'Next Sprint',
            style: {width: 200},
            cards: [
                {
                    id: 'Migrate Database to a backup offline site',
                    title: 'Migrate Database to a backup offline site',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Add dividends/other options paid quarterly',
                    title: 'Add dividends/other options paid quarterly',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Implement a split',
                    title: 'Implement a split',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Meeting with facilities team about the power supply situation',
                    title:
                        'Meeting with facilities team about the power supply situation',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Finish portfolio page UI',
                    title: 'Finish portfolio page UI',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'POST uid whenever a user signs up or signs in',
                    title: 'POST uid whenever a user signs up or signs in',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Trade Page layout',
                    title: 'Trade Page layout',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Verify only emails with @isph.edu.vn can sign up',
                    title: 'Verify only emails with @isph.edu.vn can sign up',
                    description: '',
                    label: '',
                    metadata: '',
                },
            ],
        },
        {
            id: 'Sprint Backlog',
            label: 'Sprint Backlog',
            style: {width: 200},
            cards: [
                {
                    id: 'Implement the running Factors Table',
                    title: 'Implement the running Factors Table',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Dashboard Layout',
                    title: 'Dashboard Layout',
                    description: '',
                    label: '',
                    metadata: '',
                },
            ],
        },
        {
            id: 'Dev',
            label: 'Dev',
            style: {width: 200},
            cards: [
                {
                    id: 'API Endpoint to return portfolio investment history',
                    title: 'API Endpoint to return portfolio investment history',
                    description: '',
                    label: '',
                    metadata: '',
                },
            ],
        },
        {
            id: 'Code Review',
            label: 'Code Review',
            style: {width: 200},
            cards: [
                {
                    id: 'Create transactions weights feature',
                    title: 'Create transactions weights feature',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Implement Buy/Sell Functionality',
                    title: 'Implement Buy/Sell Functionality',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Implement Admin Functionality',
                    title: 'Implement Admin Functionality',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Write program to fetch and display the stocks',
                    title: 'Write program to fetch and display the stocks',
                    description: '',
                    label: '',
                    metadata: '',
                },
            ],
        },
        {
            id: 'Testing',
            label: 'Testing',
            style: {width: 200},
            cards: [
                {
                    id: 'Add Evaluation for Portfolio to send back to front-end',
                    title: 'Add Evaluation for Portfolio to send back to front-end',
                    description: '',
                    label: '',
                    metadata: '',
                },
                {
                    id: 'Create Projection Feature using LLM',
                    title: 'Create Projection Feature using LLM',
                    description: '',
                    label: '',
                    metadata: '',
                },
            ],
        },
        {
            id: 'Done Sprint DATE - DATE 🎉',
            label: 'Done Sprint DATE - DATE 🎉',
            style: {width: 200},
            cards: [],
        },
    ],
};
