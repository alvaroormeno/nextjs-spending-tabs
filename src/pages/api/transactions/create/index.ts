
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from 'next'

import {createNewTransaction} from '@/src/lib/transactions/index'

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const newTransactionData = req.body

            const response = await createNewTransaction(newTransactionData)

            res.json(response)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    })

export default router.handler();