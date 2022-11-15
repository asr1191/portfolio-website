import Image from 'next/image'
import hitagi from '../public/hitagi.png'
import diane from '../public/dianehigh.png'
import SearchBar from '../components/Searchbar'
import FeaturedPosts from '../components/FeaturedPosts'
import SteamRecents from '../components/SteamRecents'


export default function Home() {

    return (
        <div className='bg-ht-gray-700'>
            <main className='mx-auto max-w-3xl h-[200vh]'>
                <section className="px-8 pt-8 mt-8 rounded-none shadow-2xl ring-1 ring-ht-primary-900 bg-ht-primary-800 md:rounded-md">
                    <Image className='float-right w-40 h-40 rounded-full ring-4 ring-ht-gray-500' src={diane} alt={'Diane being high'}/>
                    <h1 className='mb-2 text-6xl font-bold text-ht-gray-500'>AMAL S RAJ</h1>
                    <h3 className='mb-2 font-bold text-ht-gray-500'>Budding developer 💻, artist 🎨, gamer 🎮</h3>
                    <p className='pb-8 text-lg text-ht-gray-500'>Welcome to my little corner on the internet where I share and document what I learn about becoming a better developer, climbing the tech ladder and discovering myself.</p>
                </section>

                <SearchBar className={'mx-12 mt-8'} />

                <FeaturedPosts className={'mt-8'}/>

                <SteamRecents className={'mt-8'}/>

            </main>
        </div>
    )
}
