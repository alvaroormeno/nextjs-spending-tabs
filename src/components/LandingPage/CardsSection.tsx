import React from 'react'

// CSS STYLES
import styles from '@/src/styles/LandingPage/LandingPage.module.css'


type SingleCardProps = {
    card: {
        text: string;
        alignmentY: string;
        textAlignment: string;
    };
}


const cardsData = [
    {
        text: 'Save all your expenses in one place',
        alignmentY: 'flex-start',
        textAlignment: 'flex-start',
    },
    {
        text: 'Be on top of every daily expense',
        alignmentY: 'center',
        textAlignment: 'center',
    },
    {
        text: 'Collaborate with friends on trip expenses',
        alignmentY: 'flex-end',
        textAlignment: 'flex-start',
    }
]


const SingleCard: React.FC<SingleCardProps> = ({card}) => {
    return (
        <div className={styles.single_card_container} style={{alignItems: `${card.alignmentY}`}}>
            <p className={styles.single_card_text} style={{textAlign: card.textAlignment as React.CSSProperties['textAlign']}}>{card.text}</p>
        </div>
    )
}



const CardsSection = () => {
    return (
        <div className={styles.cards_section_main_container}>
            {
                cardsData.map((card, idx) => (
                    <SingleCard key={idx} card={card} />
                ))
            }
        </div>
    )
}

export default CardsSection