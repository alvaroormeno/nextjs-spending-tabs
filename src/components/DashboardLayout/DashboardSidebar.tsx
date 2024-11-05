'use client'
import React from 'react'

// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/components/DashboardSidebar.module.css'
// COMPONENTS


// import getUsers from '@/src/lib/fetchtest'

const DashboardSidebar = () => {


    const {
        dashboardDisplay,
        setDashboardDisplay,
    } = useDashboardContext()


    // const users = await getUsers()
    // console.log(users)


    const handleCreateProject = async () => {
        setDashboardDisplay('new-project')


        // await fetch(`api/projects/create`, {
        //     method: 'GET',
        // })
        // .then(response => response.json())
        // .then((data) => {
        //     console.log(data)
        // })
    }

    return (
        <div className={styles.sidebar_main_container}>
            <p>THIS IS THE SIDE BAR</p>

            <div 
                onClick={() => {handleCreateProject()}}
            >
                Create Project
            </div>
        </div>
    )
}

export default DashboardSidebar