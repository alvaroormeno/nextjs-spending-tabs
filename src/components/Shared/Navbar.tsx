import React from 'react'

import styles from '@/src/styles/components/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar_main_wrapper}>
            <div className={styles.navbar_main_container}>
                {/* Logo */}
                <p className={styles.navbar_logo_text}>SpendingTabs</p>
                {/* Links */}
                <div className={styles.navbar_links_container}>
                    <button className={styles.signup_btn}>
                        Sign Up
                    </button>
                    <button className={styles.login_btn}>
                        Log in
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar