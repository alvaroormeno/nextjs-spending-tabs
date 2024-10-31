import React from 'react'


// CSS STYLES
import styles from '@/src/styles/LandingPage/LandingPage.module.css'


type PriceCardProps = {
    data: {
        title: string,
        tagline: string,
        price: string,
        features: string[],
    }
}

const pricingCardsData = [
    {
        title: 'BASIC FREE',
        tagline: 'Quickly log all your expenses',
        price: 'FREE',
        features: [
            '1 Expense Board',
            '4 Expense Tabs',
            'Free forever',
        ]
    },
    {
        title: 'PREMIUM',
        tagline: 'Keep track of your expenses like a pro',
        price: '$4.99',
        features: [
            'Unlimited Expense Boards',
            'Unlimited Expense Tabs',
            'Unlimited Collaborators',
        ]
    },
]






const PriceCard: React.FC<PriceCardProps> = ({data}) => {

    const featureCheck = () => {
        return <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10.6038" r="10" fill="white"/>
            <path d="M6.75 11.2288L9.75 13.1038L14.25 8.10376" stroke="#152C5B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    }


    return (
        <div className={styles.price_card_container}>
            <p className={styles.price_card_title}>{data.title}</p>
            <p className={styles.price_card_tagline}>{data.tagline}</p>
            <p className={styles.price_card_price}>{data.price} <span>/month</span></p>

            <div className={styles.features_container}>
                {
                    data.features.map((feature, idx) => (
                        <div key={idx} className={styles.single_feature_container}>
                            {featureCheck()}
                            <p  className={styles.price_card_feature}>{feature}</p>
                        </div>
                        
                    ))
                }
            </div>

            <button className={styles.pricing_btn}>
                    Select Plan
                </button>
        </div>
    )
}



const PricingSection = () => {
    return (
        <div className={styles.pricing_section_main_container}>

            <p className={styles.pricing_title}>PRICING</p>

            <div className={styles.priceCards_container}>
                {
                    pricingCardsData.map((data, idx) => (
                        <PriceCard key={idx} data={data} />
                    ))
                }
            </div>

        </div>
    )
}

export default PricingSection