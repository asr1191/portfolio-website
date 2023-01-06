import { BsEye } from 'react-icons/bs'
import Card from '@components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';

export default function FeaturedPosts({ className }) {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([{}, {}, {}]);

    useEffect(() => {
        getFeaturedPosts();
    }, [])

    async function getFeaturedPosts() {
        const { data } = await axios.get('/api/featuredposts')
        setPosts(data.posts);
    }

    return (
        <Card
            title={'Featured Posts'}
            subtitle={'These are some of my latest musings. They are 100% correct and objective facts. Source: Trust me bro.'}
            className={className}
        >
            <ul className="flex justify-between gap-4 text-ht-gray-500 ">
                {posts.map((post) =>
                    <li className="flex flex-col justify-between flex-1 p-2 px-3 overflow-hidden transition-all rounded-md cursor-pointer aspect-1 ring-4 bg-ht-gray-700 ring-ht-primary-900 hover:-translate-y-2" key={post.slug}>
                        <Link className='flex flex-col justify-between h-full' href={`/blog/${post.slug}`} key={post.slug}>
                            {Object.keys(post).length !== 0 ?
                                <>
                                    <div>
                                        <h2 className="text-2xl font-semibold line-clamp-6">{post.title}</h2>
                                    </div>

                                    <span className='inline-flex items-center text-xl'> <BsEye className='pt-1 mr-1 text-2xl' /> {post.viewCount}</span>
                                </>
                                :
                                <div className='flex flex-col gap-3 '>
                                    <div className='w-full h-8 rounded-lg loading-shimmer bg-slate-600' />
                                    <div className='w-full h-8 rounded-lg loading-shimmer bg-slate-600' />
                                    <div className='w-full h-8 rounded-lg loading-shimmer bg-slate-600' />
                                    <div className='w-3/5 h-8 rounded-lg loading-shimmer bg-slate-600' />
                                </div>
                            }
                        </Link>
                    </li>
                )}
            </ul>
        </Card>
    )
}