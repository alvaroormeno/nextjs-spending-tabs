
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from 'next'

import {createNewProject} from '@/src/lib/projects/index'


const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
        

        try {

            const users = await createNewProject()

            res.json(users)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    })

export default router.handler();