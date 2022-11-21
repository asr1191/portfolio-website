import Card from 'components/Card';
import SearchBar from 'components/Searchbar';

export default function Blog() {
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
            </main>
        </div>
    )
}