'use client'
import React, { useEffect } from 'react'


// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/DashboardPage/DashboardPage.module.css'
// COMPONENTS
import NewProjectDisplay from '@/src/components/DashboardPage/NewProjectDisplay'


const DashboardPage = () => {

    // const {
    //     dashboardDisplay,
    //     setDashboardDisplay,
    // } = useDashboardContext()

    const {
        dashboardDisplay,
        setDashboardDisplay,
    } = useDashboardContext()



    useEffect(() => {

        

    }, dashboardDisplay)

    return (
        
        <div className={styles.dashboardPage_main_wrapper}>
            {
                dashboardDisplay === 'new-project' ? (
                    <NewProjectDisplay />
                ) : (null)
            }

        </div>
    )
}

export default DashboardPage