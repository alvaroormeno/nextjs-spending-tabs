import prisma from '@/src/utils/Prisma/prisma';


export const createNewProject = async () => {
    try {


        const data = await prisma.projects.create({
            data: {
                title: 'any title'
            }
        });
        console.log(data)


        return data
    } catch (err) {
        // console.log("getCompletedCourses FUNCTION ERROR IN lib/courses", err.message)
        return err
    }
}

