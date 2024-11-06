'use client'
import React from 'react'

// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/TabComponents/TabComponents.module.css'


const TabName = () => {

    const {
        dashboardDisplay,
        setDashboardDisplay,
        userProjects,
        selectedProject,
        setSelectedProject,
    } = useDashboardContext()

    const [edit, setEdit] = React.useState(false)
    const [tabName, setTabName] = React.useState(`New ${selectedProject.title} Tab`)

    

    const handleChange = (e: any) => {
        setTabName(e.target.value)
    }


    return edit ? (
        <div className={styles.text_input_wrapper}>
            <label htmlFor="title">Tabe Name:</label>
            <input 
                id="title"
                name="title" 
                type="text" 
                value={tabName ? tabName : ''} 
                className={styles.newTab_text_input}
                onChange={(e) => handleChange(e)} 
            />
        </div>
    ) : (
        <div className={styles.tab_name_text_wrapper}>
            <input 
                id="title"
                name="title" 
                type="text" 
                value={tabName ? tabName : ``} 
                className={styles.tab_name_disabled_text_input}
                disabled={true}
            />
            <button>Edit</button>
        </div>
    )
}

export default TabName