
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from 'next'

import {createNewTab} from '@/src/lib/tabs/index'


const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
        
        try {

            const newtabData = req.body

            const newProject = await createNewTab(newtabData)

            res.json(newProject)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    })

export default router.handler();