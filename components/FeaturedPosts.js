import { BsEye } from 'react-icons/bs'

export default function FeaturedPosts({ posts, className }) {

    posts = [
        {
            slug: 'my-first-post',
            title: 'My First Post',
            content: 'This is my first post. ',
            views: 421
        },
        {
            slug: 'my-second-post',
            title: 'My Second Post',
            content: 'This is my first post. This is some random content.',
            views: 23
        },
        {
            slug: 'my-third-post',
            title: 'My Third Post',
            content: 'This is my first post. This is some random content.',
            views: 14675
        },
    ]

    return (
        <section className={className}>
            <h1 className="text-5xl font-bold text-ht-primary-900">Featured Posts</h1>
            <h2 className="pt-2 pb-8 text-lg font-semibold text-ht-gray-600">These are some of my latest musings. They are 100% correct and objective facts. Source: Trust me bro.</h2>
            <ul className="flex justify-between gap-4 text-ht-gray-500">
                {posts.map((post) => {
                    return (
                        <li
                            className="flex flex-col justify-between flex-1 p-2 px-3 overflow-hidden ring-4 rounded-md min-h-[15rem] bg-ht-gray-700 ring-ht-primary-900 max-h-fit  hover:-translate-y-2 transition-all cursor-pointer"
                            key={post.slug}>
                            <div>
                                <h2 className="text-2xl font-semibold">{post.title.toUpperCase()}</h2>
                                <h3>{post.content}</h3>
                            </div>

                            <span className='inline-flex items-center text-xl'> <BsEye className='pt-1 mr-1 text-2xl' /> {post.views}</span>

                        </li>
                    )
                })}
            </ul>
        </section>
    )
}