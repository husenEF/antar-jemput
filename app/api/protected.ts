import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = await getToken({ req, secret });

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized gan' });
    }

    // Your protected API logic here
    res.status(200).json({ message: 'Protected content gan', user: token });
}
