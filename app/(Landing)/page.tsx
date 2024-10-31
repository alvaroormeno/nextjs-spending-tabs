import React from 'react'

// COMPONENTS
import MainSection from '@/src/components/LandingPage/MainSection'
import CardsSection from '@/src/components/LandingPage/CardsSection'
// CSS STYLES
import styles from '@/src/styles/LandingPage/LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={styles.page_main_wrapper}>

            <div className={styles.page_main_container}>
                <MainSection />
                <CardsSection />
            </div>

        </div>
    )
}

export default LandingPage


// CSS STYLES
// COMPONENTS
