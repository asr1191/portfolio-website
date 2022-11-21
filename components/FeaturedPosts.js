import { BsEye } from 'react-icons/bs'
import Card from 'components/Card'

export default function FeaturedPosts({ posts, className }) {

    posts = [
        {
            slug: 'my-first-post',
            title: 'Everything I Know About Style Guides, Design Systems, and Component Libraries, Design Systems, and Component Libraries ',
            content: 'This is my first post. ',
            views: 421
        },
        {
            slug: 'my-second-post',
            title: 'Rust Is The Future of JavaScript Infrastructure',
            content: 'This is my first post. This is some random content. This is my first post. This is some random content. This is my first post. This is some random content. ',
            views: 23
        },
        {
            slug: 'my-third-post',
            title: 'Past, Present, and Future of React State Management',
            content: 'This is my first post. This is some random content.',
            views: 14675
        },
    ]

    return (
        <Card 
            title={'Featured Posts'} 
            subtitle={'These are some of my latest musings. They are 100% correct and objective facts. Source: Trust me bro.'}
            className={className}
        >
            <ul className="flex justify-between gap-4 text-ht-gray-500 ">
                {posts.map((post) => {
                    return (
                        <li
                            className="flex flex-col justify-between flex-1 p-2 px-3 overflow-hidden transition-all rounded-md cursor-pointer aspect-1 ring-4 bg-ht-gray-700 ring-ht-primary-900 hover:-translate-y-2"
                            key={post.slug}>
                            <div>
                                <h2 className="text-2xl font-semibold line-clamp-6">{post.title}</h2>
                            </div>

                            <span className='inline-flex items-center text-xl'> <BsEye className='pt-1 mr-1 text-2xl' /> {post.views}</span>

                        </li>
                    )
                })}
            </ul>
        </Card>
    )
}