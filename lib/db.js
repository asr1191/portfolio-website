import prisma from "@lib/prisma"
import select from "@lib/select"
import { allPosts } from '.contentlayer/generated'

export async function createPosts() {
    let count = 0
    // const count = await prisma.PostMeta.deleteMany({})

    const prismaPosts = allPosts.map((post) => {
        let prismaPost = select(post, ['title', 'publishedAt', 'description', 'seoDescription', 'category', 'author', 'image', 'slug'])
        prismaPost.authorName = prismaPost.author?.name
        prismaPost.authorImage = prismaPost.author?.image
        delete prismaPost.author

        return prismaPost
    })

    try {
        count = await prisma.PostMeta.createMany({
            data: prismaPosts
        })
    } catch (e) {
        console.error('Posts already present!')
    }

    return count
}