import React from 'react'
import { toast } from 'react-toastify'

// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/DashboardPage/DashboardPage.module.css'
// COMPONENTS
import TabWrapper from '../TabComponents/TabWrapper'
import { title } from 'process'



const NewTabDisplay = () => {

    const {
        dashboardDisplay,
        setDashboardDisplay,
        userProjects,
        selectedProject,
        setSelectedProject,
        signedInUser,
        selectedTab,
        setSelectedTab,
    } = useDashboardContext()


    const [newTab, setNewtab] = React.useState({
        title: '',
        firstTransactionName: '',
        firstTransactionAmount: '',
    })



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        console.log('handleChange', name, value)

        setNewtab({
            ...newTab,
            [name]: value
        })
    }


    const handleSubmit = async () => {
        if (!signedInUser.id) {
            return
        }

        const newTabData = {
            ...newTab,
            project_id: selectedProject.id,
        }


        await fetch(`api/tabs/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTabData),
        })
        .then(response => response.json())
        .then((data) => {
            console.log('newwwwwwwwwwww tab',data)
            if (data.title) {
                // Toast Alert Success
                toast.success('Project Created')
                // Reset New Tab Data
                setNewtab({
                    title: '',
                    firstTransactionName: '',
                    firstTransactionAmount: '',
                })
                // Select Tab to render
                setSelectedTab(data)
                // Change Dashboard Display 
                setDashboardDisplay('view-tab')
                // // Fetch All Projects to render new one
                // getAllProjects(signedInUser.id)
            }
        })
    }


    return (
        <div className={styles.newTabDisplay_main_container}>

            <div className={styles.projectView_header_container}>
                <p>{selectedProject?.title}</p>
                <p>{selectedProject?.description}</p>
                <p>new tab createor</p>


                <div className={styles.text_input_wrapper}>
                    <label htmlFor="title">Tab Title:</label>
                    <input 
                        id="title"
                        name="title" 
                        type="text" 
                        value={newTab.title ? newTab.title : ''} 
                        className={styles.newProjectDisplay_text_input}
                        onChange={(e) => handleChange(e)} 
                    />
                </div>

                <h2 className={styles.first_transaction_text}>First Transaction</h2>


                <div className={styles.text_input_wrapper}>
                    <label htmlFor="title">Transaction Name:</label>
                    <input 
                        id="title"
                        name="firstTransactionName" 
                        type="text" 
                        value={newTab.firstTransactionName ? newTab.firstTransactionName : ''} 
                        className={styles.newProjectDisplay_text_input}
                        onChange={(e) => handleChange(e)} 
                    />
                </div>

                


                <div className={styles.text_input_wrapper}>
                    <label htmlFor="title">Amount:</label>
                    <input 
                        id="title"
                        name="firstTransactionAmount" 
                        type="text" 
                        value={newTab.firstTransactionAmount ? newTab.firstTransactionAmount : ''} 
                        className={styles.newProjectDisplay_text_input}
                        onChange={(e) => handleChange(e)} 
                    />
                </div>


                <button 
                    className={styles.create_tab_btn}
                    onClick={() => {handleSubmit()}}
                >
                    Create Tab +
                </button>
            </div>
        
        </div>
    )
}

export default NewTabDisplay