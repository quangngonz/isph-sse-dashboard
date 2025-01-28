import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import {Navigate, Outlet, useLocation} from 'react-router';
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import {PageContainer} from '@toolpad/core/PageContainer';
import {Account} from '@toolpad/core/Account';

import {useSession} from '../SessionContext';

function CustomAccount() {
    return (
        <Account
            slotProps={{
                preview: {slotProps: {avatarIconButton: {sx: {border: '0'}}}},
            }}
        />
    );
}

export default function Layout() {
    const {session, loading} = useSession();
    const location = useLocation();

    if (loading) {
        return (
            <div style={{width: '100%'}}>
                <LinearProgress/>
            </div>
        );
    }

    if (!session) {
        const redirectTo = `/sign-in`;

        return <Navigate to={redirectTo} replace/>;
    }

    return (
        <DashboardLayout slots={{toolbarAccount: CustomAccount}}>
            <PageContainer>
                <Outlet/>
            </PageContainer>
        </DashboardLayout>
    );
}
