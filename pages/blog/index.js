import Card from '@components/Card';
import SearchBar from '@components/Searchbar';
import BlogCard from '@components/BlogCard';

import { allPosts } from '.contentlayer/generated'
import select from '@utils/select'

export function getStaticProps() {

    const posts = allPosts.map((post) => select(post, ['title', 'description', 'readingTime', 'wordCount', 'slug', 'publishedAt']))
        .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    return {
        props: {
            posts: posts
        }
    }
}

export default function Blog({ posts }) {
    return (
        <div className='h-screen bg-ht-gray-700'>
            <main className="max-w-3xl mx-auto">
                <Card
                    title={'Blog'}
                    subtitle={`I've been writing online since yesterday, mostly about web development and tech careers. In total, I've written ${posts.length} articles on my blog. Use the search below to filter by title.`}
                    className={'mt-8'}
                >
                    <SearchBar />
                </Card>

                <div className='mt-12'>
                    {posts.map((post) =>
                        <BlogCard
                            className='mt-8'
                            key={post.slug}
                            title={post.title}
                            description={post.description}
                            readingTime={post.readingTime}
                            slug={post.slug}
                            publishedAt={post.publishedAt}
                        />
                    )}
                </div>
            </main>
        </div>
    )
}