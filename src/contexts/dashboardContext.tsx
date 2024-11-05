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
        name: '',
        email: '',
    })


    useEffect(() => {
        if (!signedInUser.id) {
            handleCheckUser()
        }
    }, [])


    // FUNCTIONS
    // const checkUser = async () => {
    //     const user = await currentUser();
    
    //     // CHECK CLERK IF USER IS NULL
    //     if (!user) {
    //         return null;
    //     }
    
    //     // CHECK IF USER EXISTS IN DATABASE
    //     const existingUser = await db.user.findUnique({
    //         where: {
    //             clerkUserId: user.id,
    //         },
    //     });
    //     console.log('existingUser', existingUser);
    
    //     // IF USER EXISTS RETURN USER
    //     if (existingUser) {
    //         return existingUser;
    //     }
    
    //     // IF USER DOES NOT EXIST CREATE USER
    //     const newDBUser = await db.user.create({
    //         data: {
    //             clerkUserId: user.id,
    //             name: `${user.firstName} ${user.lastName}`,
    //             imageUrl: user.imageUrl,
    //             email: user.emailAddresses[0].emailAddress,
    //         },
    //     })
    
    //     console.log('newDBUser', newDBUser);
    
    //     return newDBUser;
    // }


    const handleCheckUser = async () => {

        await fetch(`api/users/checkUser`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
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