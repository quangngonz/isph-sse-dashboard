import HomeIcon from '@mui/icons-material/Home';

import InsertChartIcon from '@mui/icons-material/InsertChart';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';

import EventIcon from '@mui/icons-material/Event';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HistoryIcon from '@mui/icons-material/History';

import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';

import type { Navigation } from '@toolpad/core/AppProvider';

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Management',
    },

    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <HomeIcon />,
    },
    {
        segment: 'stocks',
        title: 'Stocks',
        icon: <InsertChartIcon />,
        children: [
            {
                segment: 'overview',
                title: 'Stock Overview',
                icon: <DonutSmallIcon />,
            },
            {
                segment: 'list',
                title: 'Stock List',
                icon: <WaterfallChartIcon />,
            }
        ],
    },
    {
        segment: 'events',
        title: 'Events',
        icon: <EventIcon />,
        children: [
            {
                segment: 'pending',
                title: 'Pending Events',
                icon: <NotificationsIcon />,
            },
            {
                segment: 'history',
                title: 'Event History',
                icon: <HistoryIcon />,
            },
        ],
    },

    {
        segment: 'users',
        title: 'Users',
        icon: <PeopleIcon />,
    },

    {
        segment: 'transactions',
        title: 'Transactions',
        icon: <ReceiptIcon />,
    },
    {
        kind: 'divider',
    },
    {
        segment: 'settings',
        title: 'Settings',
        icon: <SettingsIcon />,
    },
];

export default NAVIGATION;
