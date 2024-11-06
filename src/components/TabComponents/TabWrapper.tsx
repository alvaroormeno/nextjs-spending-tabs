import React from 'react'

// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/TabComponents/TabComponents.module.css'
// COMPONENTS
import TabName from './TabName'



const TabWrapper = () => {
    return (
        <div className={styles.main_tab_wrapper}>
            <TabName/>
        </div>
    )
}

export default TabWrapper