import HomeIcon from '@mui/icons-material/Home';

import InsertChartIcon from '@mui/icons-material/InsertChart';
import HistoryIcon from '@mui/icons-material/History';

import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';

import EventIcon from '@mui/icons-material/Event';

import type {Navigation} from '@toolpad/core/AppProvider';
import DonutSmallIcon from "@mui/icons-material/DonutSmall";

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Management',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <HomeIcon/>,
    },

    {
        kind: 'header',
        title: 'Stocks',
    },
    {
        segment: 'stocks-overview',
        title: 'Stock Overview',
        icon: <DonutSmallIcon/>,
    },
    {
        segment: 'stocks-list',
        title: 'Stock List',
        icon: <InsertChartIcon/>,
    },

    {
        kind: 'header',
        title: 'Events',
    },
    {
        segment: 'events-pending',
        title: 'Pending Events',
        icon: <EventIcon/>,
    },
    {
        segment: 'events-history',
        title: 'Event History',
        icon: <HistoryIcon/>,
    },

    {
        kind: 'header',
        title: 'Users',
    },
    {
        segment: 'users',
        title: 'Users',
        icon: <PeopleIcon/>,
    },

    {
        kind: 'header',
        title: 'Transactions',
    },
    {
        segment: 'transactions',
        title: 'Transactions',
        icon: <ReceiptIcon/>,
    },

    {
        kind: 'divider',
    },
    {
        segment: 'settings',
        title: 'Settings',
        icon: <SettingsIcon/>,
    },
];

export default NAVIGATION;
