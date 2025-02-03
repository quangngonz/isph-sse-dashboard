import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {createBrowserRouter, Navigate, RouterProvider} from 'react-router';
import App from './App';
import Layout from './layouts/dashboard';

import DashboardPage from './pages/dashboardPage';

import SignInPage from './pages/signin/signin';

import StocksOverview from "./pages/stocks/overview/stocksOverview";
import StockList from "./pages/stocks/list/stockList";
import TransactionPage from "./pages/transactions/transactionPage";
import UserPage from "./pages/users/userPage";
import EventHistory from "./pages/events/eventHistory";

const router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                path: '/',
                Component: Layout,
                children: [
                    {
                        path: '',
                        Component: () => <Navigate to={'/dashboard'}/>,
                    },
                    {
                        path: '/dashboard',
                        Component: DashboardPage,
                    },

                    {
                        path: '/stocks-overview',
                        Component: StocksOverview,
                    },
                    {
                        path: '/stocks-list',
                        Component: StockList,
                    },

                    {
                        path: '/events-pending',
                        Component: () => <div>Pending Events</div>,
                    },
                    {
                        path: '/events-history',
                        Component: EventHistory,
                    },

                    {
                        path: '/users',
                        Component: UserPage,
                    },

                    {
                        path: '/transactions',
                        Component: TransactionPage,
                    },

                    {
                        path: '/settings',
                        Component: () => <div>Settings</div>,
                    }
                ],
            },
            {
                path: '/sign-in',
                Component: SignInPage,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
