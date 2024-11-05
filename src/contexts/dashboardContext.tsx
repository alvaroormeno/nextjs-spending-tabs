'use client';

import React, { useState } from 'react';
// import { usePathname, useSelectedLayoutSegments, useRouter } from 'next/navigation';



type ContextValues = {
    dashboardDisplay:string;
    setDashboardDisplay: React.Dispatch<React.SetStateAction<string>>;
} | undefined


const DashboardContext = React.createContext<ContextValues>(undefined);


export function DashboardProvider({ children }: { children: React.ReactNode }) {
    

        const [dashboardDisplay, setDashboardDisplay] = useState<string>('all-projects')


    const values: ContextValues | undefined = {
        dashboardDisplay,
        setDashboardDisplay,
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