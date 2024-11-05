import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CONTEXTS
import { DashboardProvider } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/Layouts/DashboardLayout.module.css'
// COMPONENTS
import DashboardSidebar from '@/src/components/DashboardLayout/DashboardSidebar'
import DashboardHeader from '@/src/components/DashboardLayout/DashboardHeader';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardProvider>
            <div className={styles.dashboardLayout_main_wrapper}>
                <ToastContainer />
                <div className={styles.dashboardLayout_main_container} >
                    {/* SIDE BAR */}
                    <div >
                        <DashboardSidebar />
                    </div>  
                    {/* MAIN SECTION */}
                    <main className={styles.dashboardLayout_mainSection_container}>
                        <DashboardHeader />
                        {children}
                    </main>
                </div>
            </div>
        </DashboardProvider>
    );
}