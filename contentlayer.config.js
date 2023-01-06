import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';


const Author = defineNestedType(() => ({
    name: 'Author',
    fields: {
        name: { type: 'string', required: true },
        image: { type: 'string', required: true },
    },
}));

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        description: { type: 'string', required: true },
        seoDescription: { type: 'string', required: true },
        category: { type: 'string', required: true },
        author: {
            type: 'nested',
            of: Author,
        },
        image: { type: 'string', required: true },
    },
    computedFields: {
        readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
        wordCount: {
            type: 'number',
            resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
        },
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath,
        },
    },
}))

export default makeSource({
    contentDirPath: 'posts/',
    documentTypes: [Post],
    mdx: {
        rehypePlugins: [
            [rehypeSlug],
            [rehypeAutolinkHeadings,
                {
                    behavior: "prepend",
                    // properties: {
                    //     className: [HEADING_LINK_ANCHOR],
                    // },
                },
            ],
        ],
    }
})