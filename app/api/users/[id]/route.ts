import { prisma } from '@/src/lib/prisma'

export async function GET(request: Request, { params }: { params: { id: string } }) {

    try {
        const user = await prisma.users.findFirstOrThrow({
            where: {
                id: params.id
            }
        })

        return new Response(JSON.stringify({
            status: 'ok',
            data: user,
            message: 'User Found'
        }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({
            status: 'error',
            data: [],
            message: 'User not Found'
        }), { status: 404 })
    }

}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    const response = prisma.users.delete({ where: { id } })
        .then(response => JSON.stringify({ status: 'ok', message: 'User Deleted', data: response }))
        .catch(error => JSON.stringify({ status: 'error', message: 'User Delete Failed', error: error }))
        .finally(() => console.log("finally"));
    return new Response(await response, { status: 200 })
}