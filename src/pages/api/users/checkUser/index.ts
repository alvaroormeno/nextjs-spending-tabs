
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from 'next'
// import { currentUser } from "@clerk/nextjs/server";
import {checkUser} from '@/src/lib/users/index'

import { getAuth, clerkClient } from '@clerk/nextjs/server'

// import { auth } from '@clerk/nextjs/server'

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
        
    try {

        const { userId } = getAuth(req)
        console.log('USERRRRR', userId)


        const clerkUserData = userId && await (await clerkClient()).users.getUser(userId)


        const userData = await checkUser(clerkUserData)
        res.json(userData)

    } catch (error) {
        console.log('api/users/checkUser',error)
        res.status(400).send(error)
    }
})

export default router.handler();