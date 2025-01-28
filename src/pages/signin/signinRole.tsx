'use client';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import {SignInPage} from '@toolpad/core/SignInPage';
import {Navigate, useNavigate} from 'react-router';
import {useSession, type Session} from '../../SessionContext';
import {signInWithGoogle, signInWithCredentials, firebaseSignOut} from '../../firebase/auth';

function UnauthorisedAccount() {
    return (
        <Alert severity="error">
            You are not authorised to access this page
        </Alert>
    );
}

export default function SignInRole() {
    const {session, setSession, loading} = useSession();
    const navigate = useNavigate();

    if (loading) {
        return <LinearProgress/>;
    }

    if (session) {
        return <Navigate to="/"/>;
    }

    return (
        <SignInPage
            providers={[
                {id: 'google', name: 'Google'},
                {id: 'credentials', name: 'Credentials'},
            ]}
            signIn={async (provider, formData, callbackUrl) => {
                let result;
                try {
                    // Handle provider-specific sign-in logic
                    if (provider.id === 'google') {
                        result = await signInWithGoogle();
                    } else if (provider.id === 'credentials') {
                        const email = formData?.get('email')?.toString();
                        const password = formData?.get('password')?.toString();

                        if (!email || !password) {
                            return { error: 'Email and password are required' };
                        }

                        result = await signInWithCredentials(email, password);
                    }

                    if (!result?.success || !result?.user) {
                        console.error("Sign-in failed:", result?.error);
                        await firebaseSignOut();
                        return { error: result?.error || 'Failed to sign in' };
                    }

                    const token = await result.user.getIdToken();
                    const userId = result.user.uid;

                    try {
                        // Authenticate with the backend
                        const response = await fetch('https://isph-sse.vercel.app/admin/authenticate', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`, // Include the Firebase token
                            },
                            body: JSON.stringify({ userId }), // Send the userId in the request body
                        });

                        // Handle non-JSON or failed responses
                        const contentType = response.headers.get('content-type');
                        if (!response.ok || !contentType?.includes('application/json')) {
                            const text = await response.text();
                            console.error("Authentication Error:", text);
                            await firebaseSignOut();
                            return { error: 'Not an admin or authentication failed' };
                        }

                        // Convert Firebase user to session format
                        const userSession : Session = {
                            user: {
                                userId: result.user.uid || '',
                                name: result.user.displayName || '',
                                email: result.user.email || '',
                                image: result.user.photoURL || '',
                                token: token, // Include the Firebase token in the session
                            },
                        };

                        // Set the session and redirect to the callback URL or home page
                        setSession(userSession);
                        navigate(callbackUrl || '/', { replace: true }); // Redirect to the callback URL or home page
                        return {}; // Return an empty object to indicate success
                    } catch (error) {
                        console.error("Error during authentication:", error);
                        await firebaseSignOut();
                        return { error: 'An error occurred during authentication' };
                    }
                } catch (error) {
                    console.error("Unexpected error:", error);
                    await firebaseSignOut(); // Clear any partial authentication state
                    return { error: error instanceof Error ? error.message : 'An unexpected error occurred' };
                }
            }}
            slots={{subtitle: UnauthorisedAccount }}
        />
    );
}
