
import prisma from '@lib/prisma'
import { performance } from 'perf_hooks'

export default async function handler(req, res) {
    const dbStart = performance.now();
    const posts = await prisma.PostMeta.findMany({
        orderBy: { viewCount: 'desc' },
        take: 3,
        select: {
            title: true,
            slug: true,
            viewCount: true
        }

    })
    console.log(`Retrieved ${posts.length} documents from DB in ${performance.now() - dbStart}ms`)

    res.status(200).json({
        posts: posts
    })
}