import React, { useEffect } from 'react'

// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/DashboardPage/DashboardPage.module.css'

const ProjectView = () => {

    const [projectData, setProjectData] = React.useState<any>(null)

    const {
        dashboardDisplay,
        setDashboardDisplay,
        userProjects,
        selectedProject,
        setSelectedProject,
    } = useDashboardContext()

    console.log('PROJECT-VIEW projectData', projectData)

    useEffect(() => {

        if (dashboardDisplay === 'project-view') {
            const project_id = selectedProject.id
            // FETCH PROJECT DATA
            getProjectData(project_id)
        }
        
    }, [dashboardDisplay, selectedProject])


    const getProjectData = async (project_id: string) => {
        console.log('project_id', project_id)
        await fetch(`api/projects/getProjectData/${project_id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then((data) => {
            console.log('projectData', data)
            setProjectData(data)
        })
    }


    const handleCreateTab = async () => {
        const project_id = selectedProject.id
        setDashboardDisplay('create-project-tab')
    }



    return (
        <div className={styles.projectView_main_container}>

            <div className={styles.projectView_header_container}>
                <p>{projectData?.title}</p>
                <p>{projectData?.description}</p>
            </div>

            {
                projectData && projectData.tabs && projectData.tabs.length > 0 ? (
                    <div>

                    </div>
                ) : (
                    <div className={styles.projectView_no_tabs_container}>
                        <p>This Project has no tabs yet. Create one!</p>
                        <div 
                            onClick={() => {handleCreateTab()}}
                            className={styles.new_tab_btn}
                        >
                            New Tab +
                        </div>
                    </div>
                )
            }
        
        
        </div>
    )
}

export default ProjectView