import React from 'react'


// CSS STYLES
import styles from '@/src/styles/LandingPage/LandingPage.module.css'
// IMAGES


const prop1Texts = [
    'SIMPLE',
    'NO FANCY',
    'CHARTS OR',
    'UNECESSARY',
    'FUNCTIONS',
]

const prop2Texts = [
    'WE DONT',
    'ASK FOR ANY',
    'CREDIT CARD',
    'OR FINANCIAL',
    'INFORMATION'
]


const Proposition2Section = () => {
    return (
        <div className={styles.proposition_2_section_main_container}>
            <div className={styles.prop2_left_col}>
                <div className={styles.prop_text_container}>
                {
                    prop1Texts.map((text, idx) => (
                        <p key={idx} className={idx%2 == 0 ? styles.prop2_odd_text : styles.prop2_even_text}>{text}</p>
                    ))
                }
                </div>
            </div>

            <div className={styles.prop2_right_col}>
                <div className={styles.prop_text_container}>
                {
                    prop2Texts.map((text, idx) => (
                        <p key={idx} className={idx%2 == 0 ? styles.prop2_odd_text : styles.prop2_even_text}>{text}</p>
                    ))
                }
                </div>
            </div>

        </div>
    )
}

export default Proposition2Section