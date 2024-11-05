
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from 'next'

import {getAllProjects} from '@/src/lib/projects/index'


const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
        try {

            const user_id = req.query.user_id as string

            const newProject = await getAllProjects(user_id)

            res.json(newProject)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    })

export default router.handler();