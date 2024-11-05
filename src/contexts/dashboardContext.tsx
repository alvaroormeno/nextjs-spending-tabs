'use client';
import React, { useEffect, useState } from 'react';
// import { usePathname, useSelectedLayoutSegments, useRouter } from 'next/navigation';


type ContextValues = {
    dashboardDisplay:string;
    setDashboardDisplay: React.Dispatch<React.SetStateAction<string>>;
    signedInUser:dbUserData;
    setSignedInUser: React.Dispatch<React.SetStateAction<dbUserData>>;
} | undefined


const DashboardContext = React.createContext<ContextValues>(undefined);


export function DashboardProvider({ children }: { children: React.ReactNode }) {
    
    // CONTEXT STATES
    const [dashboardDisplay, setDashboardDisplay] = useState<string>('all-projects')
    const [signedInUser, setSignedInUser] = useState<dbUserData>({
        id: '',
        clerkId: 0,
        firstName: '',
        lastName: '',
        email: '',
    })


    useEffect(() => {
        if (!signedInUser.id) {
            handleCheckUser()
        }
    }, [])


    const handleCheckUser = async () => {

        await fetch(`api/users/checkUser`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((data) => {
            setSignedInUser({
                id: data.id,
                clerkId: data.clerkId,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
            })
        })
    }


    const values: ContextValues | undefined = {
        dashboardDisplay,
        setDashboardDisplay,
        signedInUser,
        setSignedInUser,
    }

    return (
        <DashboardContext.Provider value={values}>
            {children}
        </DashboardContext.Provider>
    );
}

export function useDashboardContext() {
    const context = React.useContext(DashboardContext);
    if (context === undefined) {
        throw new Error('useDashboardContext must be used within a DashboardProvider');
    }
    return context;
}