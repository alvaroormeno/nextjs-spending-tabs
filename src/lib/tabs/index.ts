import prisma from '@/src/utils/Prisma/prisma';




export const createNewTab = async (newtabData: any) => {

    
    try {
        console.log('createNewTab newtabData', newtabData)

        const newTab = await prisma.tabs.create({
            data: {
                title: newtabData.title,
                project_id: newtabData.project_id,
            }
        });

        console.log('createNewTab newTab', newTab)

        if (newTab) {

            const newTransaction = await prisma.transactions.create({
                data: {
                    tab_id: newTab.id,
                    name: newtabData.firstTransactionName,
                    amount: parseInt(newtabData.firstTransactionAmount),
                }
            });
            console.log('newTransaction', newTransaction)
        }


        return newTab
    } catch (error) {
        console.log("createNewTab FUNCTION ERROR IN lib/tabs", error)
        return error
    }
}


export const getTabData = async (tab_id: string) => {
    try {
        const response = await prisma.tabs.findFirst({
            where: {
                id: tab_id,
            },
            include: {
                transactions: true,
            }
        });
        return response
    } catch (error) {
        console.log("getTabData FUNCTION ERROR IN lib/tabs", error)
        return error
    }
}