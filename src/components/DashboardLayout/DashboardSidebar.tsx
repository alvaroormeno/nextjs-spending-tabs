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
        userProjects,
    } = useDashboardContext()


    // const users = await getUsers()
    // console.log(users)


    const handleCreateProject = async () => {
        setDashboardDisplay('new-project')
    }

    const handleSelectProject = (project: any) => {
        console.log('project', project)
        setDashboardDisplay(`project-view-${project.id}`)
    
    }

    return (
        <div className={styles.sidebar_main_container}>

            <p className={styles.sidebar_logo}>SpendingTabs</p>

            <div 
                onClick={() => {handleCreateProject()}}
                className={styles.new_project_btn}
            >
                New Project +
            </div>

            <div className={styles.sidebar_projects_container}>
            {
                userProjects.map((project, index) => {
                    return (
                        <div 
                            key={index} 
                            className={styles.single_project_container}
                            onClick={() => {handleSelectProject(project)}}
                        >
                            <p>{project.title}</p>
                        </div>
                    )
                })
            }
            </div>
            

            
        </div>
    )
}

export default DashboardSidebar