import prisma from '@/src/utils/Prisma/prisma';


export const createNewTransaction = async (newTransactionData: any) => {

    
    try {
        console.log('createNewTransaction projectData', newTransactionData)

        const {
            name,
            amount,
            tabId
        } = newTransactionData

        const amountVal: number = parseFloat(amount.toString())

        const newTransaction = await prisma.transactions.create({
            data: {
                tab_id: tabId,
                name: name,
                amount: amountVal,
            }
        });
        console.log('newTransaction', newTransaction)


        return newTransaction
    } catch (error) {
        console.log("createNewTransaction FUNCTION ERROR IN lib/tabs", error)
        return error
    }
}

