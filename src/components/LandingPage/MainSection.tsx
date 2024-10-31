import React from 'react'

// CSS STYLES
import styles from '@/src/styles/LandingPage/LandingPage.module.css'

const MainSection = () => {
    return (
        <div className={styles.main_section_main_container}>
            <div className={styles.main_text_container}>
                <p className={styles.main_text}>Effortlessly Log Every Journey Expense</p>
                <p className={styles.secondary_text}>We provide an easy way to track, share and organize your trip expenses </p>
                <button className={styles.signup_btn}>
                    Try for Free
                </button>
            </div>
        </div>
    )
}

export default MainSection