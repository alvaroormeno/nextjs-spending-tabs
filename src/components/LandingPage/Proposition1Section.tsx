import React from 'react'
import Image from 'next/image'

// CSS STYLES
import styles from '@/src/styles/LandingPage/LandingPage.module.css'
// IMAGES
import receiptImg from '@/public/images/money_expenses.png'

const propTexts = [
    'TRACK',
    'EVERY',
    'EXPENSE',
    'QUICKLY',
]

const Proposition1Section = () => {
    return (
        <div className={styles.proposition_1_section_main_container}>
            <div className={styles.prop1_left_col}>
                <div className={styles.prop_text_container}>
                {
                    propTexts.map((text, idx) => (
                        <p key={idx} className={idx%2 == 0 ? styles.prop1_odd_text : styles.prop1_even_text}>{text}</p>
                    ))
                }
                </div>
                <button className={styles.signup_btn}>
                    Try for Free
                </button>
            </div>

            <Image src={receiptImg} alt="Receipt on hand" className={styles.prop1_img} />

        </div>
    )
}

export default Proposition1Section