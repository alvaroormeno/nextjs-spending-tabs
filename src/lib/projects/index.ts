import prisma from '@/src/utils/Prisma/prisma';

type ProjectDataType = {
    title: string,
    description: string,
    user_id: string,
    tabs: any
}

export const createNewProject = async (projectData: ProjectDataType) => {

    
    try {
        console.log('createNewProject projectData', projectData)

        const newProject = await prisma.projects.create({
            data: {
                title: projectData.title,
                description: projectData.description,
                user_id: projectData.user_id,
            }
        });
        console.log('newProject', newProject)


        return newProject
    } catch (error) {
        console.log("createNewProject FUNCTION ERROR IN lib/projects", error)
        return error
    }
}




export const getAllProjects = async (user_id: string) => {
    try {
        console.log('allProjects user_id', user_id)
        const allProjects = await prisma.projects.findMany({
            where: {
                user_id: user_id,
            }
        });
        console.log('allProjects', allProjects)


        return allProjects
    } catch (error) {
        console.log("getAllProjects FUNCTION ERROR IN lib/projects", error)
        return error
    }
}