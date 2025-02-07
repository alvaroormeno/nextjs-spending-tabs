import prisma from '@/src/utils/Prisma/prisma';

// type ProjectDataType = {
//     title: string,
//     description: string,
//     user_id: string,
//     tabs: any,
//     created_at: string,
//     updated_at: string,
// }

export const createNewProject = async (projectData: projectDataType) => {

    
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
            orderBy: {
                created_at: 'desc',
            },
            where: {
                user_id: user_id,
            },
            include: {
                tabs: true,
            }
        });
        console.log('allProjects', allProjects)


        return allProjects
    } catch (error) {
        console.log("getAllProjects FUNCTION ERROR IN lib/projects", error)
        return error
    }
}


export const getProjectData = async (project_id: string) => {
    try {
        console.log('getProjectData project_id', project_id)

        const response = await prisma.projects.findFirst({
            where: {
                id: project_id,
            },
            include: {
                tabs: true, 
            },
        });
        console.log('response', response)


        return response
    } catch (error) {
        console.log("getAllProjects FUNCTION ERROR IN lib/projects", error)
        return error
    }
}