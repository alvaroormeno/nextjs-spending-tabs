import React from 'react'

// COMPONENTS
import MainSection from '@/src/components/LandingPage/MainSection'
import CardsSection from '@/src/components/LandingPage/CardsSection'
import Proposition1Section from '@/src/components/LandingPage/Proposition1Section'
// CSS STYLES
import styles from '@/src/styles/LandingPage/LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={styles.page_main_wrapper}>

            <div className={styles.page_main_container}>
                <MainSection />
                <CardsSection />
                <Proposition1Section />
            </div>

        </div>
    )
}

export default LandingPage


// CSS STYLES
// COMPONENTS
