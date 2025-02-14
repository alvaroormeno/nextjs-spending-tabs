
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from 'next'

import {getTabData} from '@/src/lib/tabs/index'


const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
        
        try {

            const tab_id = req.query.tab_id as string

            const response = await getTabData(tab_id)

            res.json(response)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    })

export default router.handler();