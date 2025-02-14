'use client'
import React, { useEffect } from 'react'


// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/DashboardPage/DashboardPage.module.css'
// COMPONENTS
import NewProjectDisplay from '@/src/components/DashboardPage/NewProjectDisplay'
import ProjectView from '@/src/components/DashboardPage/ProjectView'
import NewTabDisplay from '@/src/components/DashboardPage/NewTabDisplay'
import AllProjectsView from '@/src/components/DashboardPage/AllProjectsView'
import SingleTabView from '@/src/components/DashboardPage/SingleTabView'


const DashboardPage = () => {

    // const {
    //     dashboardDisplay,
    //     setDashboardDisplay,
    // } = useDashboardContext()

    const {
        dashboardDisplay,
        setDashboardDisplay,
    } = useDashboardContext()



    // useEffect(() => {



    // }, dashboardDisplay)

    return (
        
        <div className={styles.dashboardPage_main_wrapper}>
            {
                dashboardDisplay === 'new-project' ? (
                    <NewProjectDisplay />

                ) : dashboardDisplay === 'project-view' ? (
                    <ProjectView />

                ) : dashboardDisplay === 'create-project-tab' ? (
                    <NewTabDisplay />

                ) :  dashboardDisplay === 'all-projects' ? (
                    <AllProjectsView />
                    
                ) :  dashboardDisplay === 'single-tab-view' ? (
                    <SingleTabView />
                    
                ) : (null)
            }

        </div>
    )
}

export default DashboardPage