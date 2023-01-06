import Image from 'next/image'

import getRecentGamesData from '@lib/getRecentGamesData'
import { createPosts } from '@lib/db'

import SearchBar from '@components/Searchbar'
import FeaturedPosts from '@components/FeaturedPosts'
import SteamRecents from '@components/SteamRecents'
import diane from '@images/dianehigh.png'

export async function getStaticProps(context) {

    const response = await getRecentGamesData()
    const postCount = await createPosts()


    console.log('HomePage', 'revalidating RecentGames.')
    return {
        props: {
            recentGames: response,
            revalidate: 60
        }
    }
}

export default function Home({ recentGames }) {

    return (
        <>
            <section className="px-8 pt-8 rounded-none shadow-2xl ring-1 ring-ht-primary-900 bg-ht-primary-800 md:rounded-md">
                <Image className='float-right w-40 h-40 rounded-full ring-4 ring-ht-gray-500' src={diane} alt={'Diane being high'} />
                <h1 className='mb-2 text-6xl font-bold text-ht-gray-500'>AMAL S RAJ</h1>
                <h3 className='mb-2 font-bold text-ht-gray-500'>Budding developer 💻, artist 🎨, gamer 🎮</h3>
                <p className='pb-8 text-lg text-ht-gray-500'>Welcome to my little corner on the internet where I share and document what I learn about becoming a better developer, climbing the tech ladder and discovering myself.</p>
            </section>

            <SearchBar className={'mx-12 mt-8'} />
            <FeaturedPosts className={'mt-16 mx-8 md:mx-0'} />
            <SteamRecents className={'mt-16 mx-8 md:mx-0'} recentGames={recentGames} />
        </>
    )
}

