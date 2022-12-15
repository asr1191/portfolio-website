import { allPosts } from '.contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { BiTimer } from 'react-icons/bi'
import Link from 'next/link'

export async function getStaticPaths() {
    const paths = allPosts.map((post) => ({ params: { slug: post.slug } }))
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const post = allPosts.find((post) => post.slug === params.slug)
    return {
        props: {
            post: post
        }
    }
}

export default function BlogPost({ post }) {

    const components = {
        h1: (props) => {
            return <h1 className='text-blue-500' {...props} />
        }
    }

    const MDXContent = useMDXComponent(post.body.code);
    return (
        <div>
            <div className='flex items-start justify-between'>
                <Link href={`/blog`}>
                    <div className='flex items-center text-2xl text-ht-gray-600 group'>
                        <MdOutlineArrowBackIosNew className='mr-1 text-xl transition-all group-hover:-translate-x-2' />
                        <p className='mb-1'>Back</p>
                    </div>
                </Link>
                <div className='flex text-xl font-semibold item-center text-ht-gray-600'>
                    <BiTimer className='mr-1 text-3xl' />
                    <p className=''>{post.readingTime.text}</p>
                </div>
            </div>
            {/* <div className='mt-4 prose prose-xl max-w-none prose-invert prose-h1:text-ht-primary-900'> */}
            <div className='mt-4 prose prose-invert'>
                <MDXContent components={components} />
            </div>
        </div>
    )
}