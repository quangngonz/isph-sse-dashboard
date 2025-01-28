import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/dashboard';

import DashboardPage from './pages/dashboardPage';

import SignInPage from './pages/signin';

import StocksOverview from "./pages/stocks/overview/stocksOverview";
import StockList from "./pages/stocks/list/stockList";

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
            Component: DashboardPage,
          },
          {
            path: '/dashboard',
            Component: DashboardPage,
          },

          {
            path: '/stocks/overview',
            Component: StocksOverview,
          },
          {
            path: '/stocks/list',
            Component: StockList,
          },

          {
            path: '/events/pending',
            Component: () => <div>Pending Events</div>,
          },
          {
            path: '/events/history',
            Component: () => <div>Events History</div>,
          },

          {
            path: '/users',
            Component: () => <div>Users List</div>,
          },

          {
            path: '/transactions',
            Component: () => <div>Transactions List</div>,
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
    <RouterProvider router={router} />
  </React.StrictMode>,
);
