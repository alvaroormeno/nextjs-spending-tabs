import prisma from '@/src/utils/Prisma/prisma';


export const getUsers = async () => {
    try {
        const data = await prisma.user.findMany({
            
        });
        console.log(data)

        // const data = await prisma.user.create({
        //     data: {
        //         name: 'Rich',
        //         email: 'hello@prisma.com',
        //     }
        // });
        // console.log(data)


        return data
    } catch (err) {
        // console.log("getCompletedCourses FUNCTION ERROR IN lib/courses", err.message)
        return err
    }
}

export default getUsers