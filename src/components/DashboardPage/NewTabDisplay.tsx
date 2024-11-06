import React from 'react'

// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/DashboardPage/DashboardPage.module.css'



const NewTabDisplay = () => {

    const {
        dashboardDisplay,
        setDashboardDisplay,
        userProjects,
        selectedProject,
        setSelectedProject,
    } = useDashboardContext()


    return (
        <div className={styles.newTabDisplay_main_container}>

            <div className={styles.projectView_header_container}>
                <p>{selectedProject?.title}</p>
                <p>{selectedProject?.description}</p>
                <p>new tab</p>
            </div>
        
        </div>
    )
}

export default NewTabDisplay