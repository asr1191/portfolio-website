import Card from 'components/Card';
import SearchBar from '@components/Searchbar';

import { allPosts } from '.contentlayer/generated'
import select from '@utils/select'

export function getStaticProps() {
    // console.log(allPosts);
    // const posts = []
    const posts = allPosts.map((post) => select(post, ['title', 'description', 'readingTime', 'wordCount', 'slug', 'publishedAt']))
    console.log(posts);

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
                    subtitle={`I've been writing online since #YEAR, mostly about web development and tech careers. In total, I've written #NO_OF_ARTICLES articles on my blog. Use the search below to filter by title.`}
                    className={'mt-8'}
                >
                    <SearchBar />
                </Card>

                <Card className={'prose prose-invert'}>

                </Card>
            </main>
        </div>
    )
}