import React, { use, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
// CONTEXTS
import { useDashboardContext } from '@/src/contexts/dashboardContext'
// CSS STYLES
import styles from '@/src/styles/DashboardPage/DashboardPage.module.css'

const SingleTabView = () => {

    const {
        selectedTab,
        getTabData,
    } = useDashboardContext()

    console.log('SingleTabView selectedTab', selectedTab)
    const {
        transactions,
    } = selectedTab


    const [income, setIncome] = useState<number | undefined>(0)
    const [expense, setExpense] = useState<number | undefined>(0)
    const [openAddTransaction, setOpenAddTransaction] = useState<boolean>(false)
    const [newTransactionName, setNewTransactionName] = useState<string>('')
    const [newTransactionAmount, setNewTransactionAmount] = useState<string>('')



    useEffect(() => {
        if (transactions.length > 0) {
            formaIncomeExpense(transactions)
        }
    }, [transactions])




    const formaIncomeExpense = (transactions: transactionDataType[]) => {
        // GET ONLY AMOUNTS FROM TRANSACTIONS
        const amounts: number[] = transactions.map((transaction)  => transaction.amount)
        // GET INCOME BY FILTERING POSITIVE AMOUNTS AND REDUCING THEM
        const income = amounts.filter((amount) => amount > 0).reduce((sum, income) => sum + income, 0)
        // GET EXPENSE BY FILTERING POSITIVE AMOUNTS AND REDUCING THEM
        const expense = amounts.filter(amount => amount < 0).reduce((sum, expnse) => sum + expnse, 0)

        setIncome(income)
        setExpense(expense)
    }

    const addCommas = (incomeOrExpense: number): string =>{
        return incomeOrExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    const handleCancelAddTransaction = () => {
        setNewTransactionName('')
        setNewTransactionAmount('')
        setOpenAddTransaction(false)
    }


    const handleSubmitTransaction = async () => {
        const tabId = selectedTab.id
        const newTransactionData = {
            name: newTransactionName,
            amount: newTransactionAmount,
            tabId: tabId,
        }
        await fetch(`api/transactions/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTransactionData),
        })
        .then(response => response.json())
        .then((data) => {
            console.log('newTransactionResp', data)
            if (data.name) {
                setNewTransactionName('');
                setNewTransactionAmount('');
                toast.success('Transaction Created');
                getTabData(data.tab_id)
            }
        })
    }


    // CALCULATE BALANCE USING REDUCE, STARTING FROM 0
    const balance = transactions.reduce((sum: number, transaction: any) => sum + transaction.amount, 0)

    return selectedTab && (
        <div className={styles.singleTabView_main_container}>


            <div className={styles.single_tab_main_container}>
                <p className={styles.single_tab_title}>{selectedTab.title}</p>
                <p className={styles.single_tab_balance}>Tab Balance: ${balance}</p>
                <p>Income/Expenses</p>
                <div className={styles.single_tab_income_expenses_container}>
                    <div>
                        <h4>Income</h4>
                        <p className='money plus'>${addCommas(Number(income?.toFixed(2)))}</p>
                    </div>
                    <div>
                        <h4>Expense</h4>
                        <p className='money minus'>${addCommas(Number(expense?.toFixed(2)))}</p>
                    </div>
                </div>

                {
                    !openAddTransaction ? (
                        <div 
                            className={styles.add_transaction_btn}
                            onClick={() => {setOpenAddTransaction(true)}}
                        >
                            add transaction
                        </div>
                    ) : (
                        <div className={styles.single_tab_add_transaction_container}>
                            {/* Transaction Name */}
                            <p>Transaction Name</p>
                            <input 
                                type="text"
                                placeholder='Enter Name...'
                                value={newTransactionName}
                                onChange={(e) => {setNewTransactionName(e.target.value)}} 
                            />
                            {/* Transaction Amount */}
                            <p>Transaction amount</p>
                            <input 
                                type="text"
                                placeholder='Example: 5.50 or -5.50'
                                value={newTransactionAmount}
                                onChange={(e) => {setNewTransactionAmount(e.target.value)}}
                            />

                            <div className={styles.single_tab_buttons_container}>
                                <div 
                                    className={styles.cancel_btn}
                                    onClick={() => handleCancelAddTransaction()}
                                >
                                    Cancel
                                </div>
                                <div 
                                    className={styles.submit_btn}
                                    onClick={() => handleSubmitTransaction()}
                                >
                                    Submit
                                </div>
                            </div>
                        </div>
                    )
                }

                <p>History of transactions</p>
                {
                    transactions && transactions.length > 0 && (
                        transactions.map((transaction: any, index: number) => {
                            return (
                                <div 
                                    key={index}
                                    className={styles.singleTabView_history_transaction_container}
                                >
                                    <p>{transaction.name}</p>
                                    <p>{transaction.amount}</p>
                                </div>
                            )
                        })
                    )
                }
            </div>
        
        </div>
    )
}

export default SingleTabView