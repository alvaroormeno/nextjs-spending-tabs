import React, {useEffect} from 'react'

// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/DashboardPage/DashboardPage.module.css'
// COMPONENTS
import TabWrapper from '../TabComponents/TabWrapper'



const AllProjectsView = () => {


    const {
        signedInUser,
        getAllProjects,
        userProjects,
        setDashboardDisplay,
        setSelectedProject,
    } = useDashboardContext()


    useEffect(() => {
        if (signedInUser && signedInUser.id) {
            getAllProjects(signedInUser.id)
        }
    }, [signedInUser])


    const handleSelectProject = (project: any) => {
        console.log('project', project)
        setDashboardDisplay(`project-view`)
        setSelectedProject(project)
    
    }



    console.log('AllProjectsView userProjects', userProjects)

    return (
        <div className={styles.allProjectsView_main_container}>

            <div className={styles.allProjectsView_header_container}>
                <p>Welcome to your Dashboard</p>
                <p>Here you will find everything analytics... </p>
                <p># of Projects:</p>
            </div>  

            {
                userProjects && userProjects.length > 0 ? (
                    userProjects.map((project, index) => {
                        return (
                            <div 
                                key={`${index}-${project.title}`} 
                                className={styles.allProjectsView_single_project_container}
                                onClick={() => {handleSelectProject(project)}}
                            >
                                    <p>{project.title}</p>
                                    <p>{project.description}</p>
                                    <p># of Tabs: {project.tabs.length}</p>
                            </div>
                        )
                    })
                ) : (
                    <p>No Projects Available, create one!</p>
                )
            }

        </div>
    )
}

export default AllProjectsView