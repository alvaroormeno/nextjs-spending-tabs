
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from 'next'

import {getProjectData} from '@/src/lib/projects/index'


const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
        

        try {

            const project_id = req.query.project_id as string

            const projectData = await getProjectData(project_id)

            res.json(projectData)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    })

export default router.handler();