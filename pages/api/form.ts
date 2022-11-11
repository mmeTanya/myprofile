import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { db } = await connectToDatabase()


    const body = JSON.parse(req.body)
    const order = db.collection('profile').insertOne({ 
        name: body.name, 
        email: body.email, 
        phone: body.phone, 
        comments: body.comments });

    res.status(200).json({ order })
}
