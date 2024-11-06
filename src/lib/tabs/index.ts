import prisma from '@/src/utils/Prisma/prisma';




export const createNewTab = async (newtabData: any) => {

    
    try {
        console.log('createNewTab newtabData', newtabData)

        const newTab = await prisma.tabs.create({
            data: {
                title: newtabData.title,
                project_id: newtabData.description,
            }
        });

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
        console.log("createNewTab FUNCTION ERROR IN lib/projects", error)
        return error
    }
}