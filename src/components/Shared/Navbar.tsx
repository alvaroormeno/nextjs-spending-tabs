'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { 
    // SignInButton, 
    SignedIn, 
    SignedOut, 
    UserButton 
} from '@clerk/nextjs'


import styles from '@/src/styles/components/Navbar.module.css'

const Navbar = () => {

    const pathname = usePathname()

    console.log('pathname:', pathname)
    return pathname && !pathname.includes('/dashboard') ? (
        <div className={styles.navbar_main_wrapper}>
            <div className={styles.navbar_main_container}>
                {/* Logo */}
                <p className={styles.navbar_logo_text}>SpendingTabs</p>
                {/* Links */}
                <div className={styles.navbar_links_container}>
                    <SignedOut>
                        
                        <Link href={'/sign-in'}>
                            <button className={styles.login_btn}>
                                Log in
                            </button>
                        </Link>

                        <Link href={'/sign-up'}>
                            <button className={styles.signup_btn}>
                                Sign Up
                            </button>
                        </Link>
                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                </div>
                
            </div>
        </div>
    ) : (null)
}

export default Navbar