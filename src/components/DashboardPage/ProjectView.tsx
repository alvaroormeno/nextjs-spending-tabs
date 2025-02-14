import React, { useEffect } from 'react'

// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/DashboardPage/DashboardPage.module.css'
// COMPONENTS
import TabWrapper from '../TabComponents/TabWrapper'

const ProjectView = () => {

    const [projectData, setProjectData] = React.useState<any>(null)

    const {
        dashboardDisplay,
        setDashboardDisplay,
        userProjects,
        selectedProject,
        setSelectedProject,
        setSelectedTab,
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


    const formatDate = (isoString: string): string => {
        const date = new Date(isoString);
        return date.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true, // Ensures AM/PM format
        });
    };



    const handleSelectSingleTab = (tab: any) => {
        console.log('handleSelectSingleTab tab', tab)
        setSelectedTab(tab)
        setDashboardDisplay('single-tab-view')
    }



    return (
        <div className={styles.projectView_main_container}>

            <div className={styles.projectView_header_container}>
                <p>{projectData?.title}</p>
                <p>{projectData?.description}</p>
                <p># of Tabs: {projectData?.tabs.length} </p>
            </div>

            {
                projectData && projectData.tabs && projectData.tabs.length > 0 ? (
                    <>
                    <div className={styles.projectView_all_tabs_container}>
                        {
                            projectData.tabs.map((tab: any, index: number) => {
                                return (
                                    <div 
                                        key={index} 
                                        className={styles.single_tab_quick_view_container}
                                        onClick={() => {handleSelectSingleTab(tab)}}
                                    >
                                        <p>{tab.title}</p>
                                        <p>Created: {formatDate(tab.created_at)}</p>
                                        <p>Last Modified: {formatDate(tab.updated_at)}</p>
                                        <p>Balance: </p>
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                    <div 
                        onClick={() => {handleCreateTab()}}
                        className={styles.new_tab_btn}
                    >
                        New Tab +
                    </div>
                    </>

                    



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