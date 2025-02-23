'use client';
import React, { useEffect, useState } from 'react';
// import { usePathname, useSelectedLayoutSegments, useRouter } from 'next/navigation';


type ContextValues = {
    // STATES
    dashboardDisplay:string;
    setDashboardDisplay: React.Dispatch<React.SetStateAction<string>>;
    signedInUser:dbUserData;
    setSignedInUser: React.Dispatch<React.SetStateAction<dbUserData>>;
    userProjects:any[];
    setUserProjects: React.Dispatch<React.SetStateAction<any[]>>;
    selectedProject:any;
    setSelectedProject: React.Dispatch<React.SetStateAction<any>>;
    selectedTab:any;
    setSelectedTab: React.Dispatch<React.SetStateAction<any>>;
    // FUNCTIONS
    getAllProjects: Function;
    getTabData: Function;
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
    const [userProjects, setUserProjects] = useState<any[]>([])
    const [selectedProject, setSelectedProject] = useState<any>(null)
    const [selectedTab, setSelectedTab] = useState<any>(null)


    useEffect(() => {
        if (!signedInUser.id) {
            handleCheckUser()
        }
    }, [signedInUser])



    // API CALLS


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


            getAllProjects(data.id)
        })
    }



    const getAllProjects = async (user_id: string) => {

        await fetch(`api/projects/getAllProjects/${user_id}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((data) => {
            console.log('allprojectsssss', data)
            setUserProjects(data)

        })
    }



    const getTabData = async (tab_id: string) => {

        await fetch(`api/tabs/getTabData/${tab_id}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((data) => {
            console.log('getTabData', data)
            setSelectedTab(data)

        })
    }




    


    const values: ContextValues | undefined = {
        // STATES
        dashboardDisplay,
        setDashboardDisplay,
        signedInUser,
        setSignedInUser,
        userProjects,
        setUserProjects,
        selectedProject,
        setSelectedProject,
        selectedTab,
        setSelectedTab,
        // FUNCTIONS
        getAllProjects,
        getTabData,
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