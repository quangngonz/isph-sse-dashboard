'use client';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import {SignInPage} from '@toolpad/core/SignInPage';
import {useNavigate} from 'react-router';
import {useSession} from '../../SessionContext';
import handleLogin from "./handleLogin";

function DemoInfo() {
    return (
        <Alert severity="info">
            This feature is disabled in the demo. Sign in with your Google account
        </Alert>
    );
}

export default function SignIn() {
    const {setSession, loading} = useSession();
    const navigate = useNavigate();

    if (loading) {
        return <LinearProgress/>;
    }

    return (
        <SignInPage
            providers={[
                {id: 'google', name: 'Google'},
                {id: 'credentials', name: 'Credentials'},
            ]}
            signIn={(provider, formData) => handleLogin(provider, formData, navigate, setSession)}
            slots={{subtitle: DemoInfo}}
        />
    );
}
