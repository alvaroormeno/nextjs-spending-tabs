import React from 'react'

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
        <div className={styles.dashboardLayout_main_wrapper} >
            <div className={styles.dashboardLayout_main_container} >
                {/* SIDE BAR */}
                <div >
                    <DashboardSidebar />
                </div>  

                <main className={styles.dashboardLayout_mainSection_container}>
                    <DashboardHeader />
                    {children}
                </main>
            </div>

            

        </div>
    );
}