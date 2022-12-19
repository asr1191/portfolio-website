
import prisma from '@lib/prisma'

export default async function handler(req, res) {

    const posts = await prisma.PostMeta.findMany({
        orderBy: { viewCount: 'desc' },
        take: 3,
        select: {
            title: true,
            slug: true,
            viewCount: true
        }

    })

    res.status(200).json({
        posts: posts
    })
}