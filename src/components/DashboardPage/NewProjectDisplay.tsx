import React from 'react'
import { toast } from 'react-toastify'


// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/DashboardPage/DashboardPage.module.css'

const NewProjectDisplay = () => {

    const [newProject, setNewProject] = React.useState({
        title: '',
        description: '',
    })


    const {
        signedInUser,
        setDashboardDisplay,
    } = useDashboardContext()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        console.log('handleChange', name, value)

        setNewProject({
            ...newProject,
            [name]: value
        })
    }

    const handleSubmit = async () => {

        if (!signedInUser.id) {
            return
        }

        console.log('signedInUser', signedInUser)

        const projectData = {
            ...newProject,
            user_id: signedInUser.id,
            tabs: []
        }

        await fetch(`api/projects/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(projectData),
        })
        .then(response => response.json())
        .then((data) => {
            console.log('newwwwwwwwwwww',data)
            if (data.title) {
                toast.success('Project Created')
                setNewProject({
                    title: '',
                    description: '',
                })
                setDashboardDisplay('all-projects')
            }
        })


    }


    return (
        <div className={styles.newProjectDisplay_main_container}>

            <div className={styles.text_input_wrapper}>
                <label htmlFor="title">Project Title:</label>
                <input 
                    id="title"
                    name="title" 
                    type="text" 
                    value={newProject.title ? newProject.title : ''} 
                    className={styles.newProjectDisplay_text_input}
                    onChange={(e) => handleChange(e)} 
                />
            </div>


            <div className={styles.text_input_wrapper}>
                <label htmlFor="description">Short Description:</label>
                <input 
                    id="description" 
                    name="description" 
                    type="text" 
                    value={newProject.description ? newProject.description : ''} 
                    className={styles.newProjectDisplay_text_input}
                    onChange={(e) => handleChange(e)} 
                />
            </div>
            
            <button 
                className={styles.submit_btn}
                onClick={() => handleSubmit()}
            >
                Submit
            </button>


        </div>
    )
}

export default NewProjectDisplay