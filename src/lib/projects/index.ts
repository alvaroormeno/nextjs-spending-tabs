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

