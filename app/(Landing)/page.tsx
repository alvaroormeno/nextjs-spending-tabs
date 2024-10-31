import React from 'react'

// COMPONENTS
import MainSection from '@/src/components/LandingPage/MainSection'
// CSS STYLES
import styles from '@/src/styles/LandingPage/LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={styles.page_main_wrapper}>

            <div className={styles.page_main_container}>
                <MainSection />
            </div>

        </div>
    )
}

export default LandingPage


// CSS STYLES
// COMPONENTS
