import { hash } from 'bcryptjs';
import { prisma } from '@/src/lib/prisma'

//https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body

export async function GET() {
    const users = await prisma.users.findMany()
    return new Response(JSON.stringify(users), {
        headers: {
            'content-type': 'application/json'
        }
    })
}

export async function POST(request: Request) {
    const body = await request.json()
    const password = await hash(body.password, 12);
    const user = await prisma.users.create({
        data: { ...body, password }
    })
    return new Response(JSON.stringify(user), {
        headers: {
            'content-type': 'application/json'
        }
    })
}