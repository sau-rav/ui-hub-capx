import { useEffect, useState } from 'react';
import React from 'react';
import { auth } from '../../config/firebase';
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";
import axios from 'axios';

export const Dashboard = (): JSX.Element => {
    const router: NextRouter = useRouter();
    const [uid, setUid] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Add loading state
    const refParam = typeof router.query.ref === 'string' ? router.query.ref : null;
    const user = auth.currentUser;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Set loading to true before making request

                if (user) {
                    const idToken = await user.getIdToken(true);
                    
                    const headers: { [key: string]: string } = {
                        Authorization: idToken
                    };

                    if (refParam) {
                        headers.ReferralCode = refParam;
                    }

                    const config = {
                        headers
                    };

                    const response = await axios.get('http://localhost:8080/dashboard', config);
                    setUid(response.data);
                } else {
                    // User is not logged in or request already sent
                    setUid(null);
                }

                setLoading(false); // Set loading to false once request is completed
            } catch (error) {
                console.error('Error retrieving UID:', error);
                setLoading(false); // Ensure loading state is set to false in case of error
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure useEffect runs only once

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-16 bg-slate-300 flex flex-col gap-3">
            <div className="flex-1 text-black text-8xl font-bold">
                {user ? (
                    `Hi ${user.displayName}. Welcome to your dashboard.`
                ) : (
                    <p className="login-message">
                        No user is logged in. Please proceed to{" "}
                        <Link href="/join-waitlist" className="login-link">
                            login
                        </Link>{" "}
                        page.
                    </p>
                )}
            </div>
            {user && (
                <div className="flex flex-wrap gap-2 justify-between">
                    <p className="welcome-message">{uid}</p>
                </div>
            )}
        </div>
    );
};
