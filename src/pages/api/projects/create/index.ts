
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from 'next'

import {createNewProject} from '@/src/lib/projects/index'


const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
        

        try {

            const projectData = req.body

            console.log('AAAAAAAAA', projectData)

            const newProject = await createNewProject(projectData)

            res.json(newProject)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    })

export default router.handler();