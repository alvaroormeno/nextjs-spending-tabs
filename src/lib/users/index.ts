import prisma from '@/src/utils/Prisma/prisma';
// import { currentUser } from "@clerk/nextjs/server";

export const checkUser = async (clerkUserData: any) => {
    try {
        // const user = await currentUser();
        // console.log('USERRRRR', user)

        // CHECK CLERK IF USER IS NULL
        if (!clerkUserData) {
            return null;
        }

        // // CHECK IF USER EXISTS IN DATABASE
        const existingUser = await prisma.user.findFirst({
            where: {
                clerkId: clerkUserData.id,
            },
        });


        // // IF USER EXISTS RETURN USER
        if (existingUser) {
            return existingUser;
        }

        // // IF USER DOES NOT EXIST CREATE USER
        const newDBUser = await prisma.user.create({
            data: {
                clerkId: clerkUserData.id,
                firstName: clerkUserData.firstName,
                lastName: clerkUserData.lastName,
                email: clerkUserData.emailAddresses[0].emailAddress,
            },
        })

        // console.log('newDBUser', newDBUser);

        return newDBUser;




    } catch (error) {
        console.log('ERROR in checkUser', error)
        return error
    }
    



    
}