import Image from 'next/image'
import hitagi from '../public/hitagi.png'
import diane from '../public/dianehigh.png'
import SearchBar from '../components/Searchbar'
import FeaturedPosts from '../components/FeaturedPosts'
import SteamRecents from '../components/SteamRecents'
import axios from 'axios'

export async function getStaticProps(context) {
    const { data } = await axios.get(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${process.env.STEAM_ID}&format=json`)
    const response = data.response

    let appidList = ''
    for (let game of response.games) {
        appidList += (game.appid + ',')
    }

    const tagData = await axios.get(`https://store.steampowered.com/broadcast/ajaxgetbatchappcapsuleinfo?appids=${appidList}`)
    const apps = tagData.data.apps
    
    for (let i = 0; i < apps.length; i++) {
        response.games[i].tags = apps[i].tags
    }

    console.log('HomePage', 'revalidating RecentGames.')
    return {
        props: {
            recentGames:response,
            revalidate: 60
        }
    }
}

export default function Home({recentGames}) {

    return (
        <div className='bg-ht-gray-700'>
            <main className='max-w-3xl pb-20 mx-auto'>
                <section className="px-8 pt-8 mt-8 rounded-none shadow-2xl ring-1 ring-ht-primary-900 bg-ht-primary-800 md:rounded-md">
                    <Image className='float-right w-40 h-40 rounded-full ring-4 ring-ht-gray-500' src={diane} alt={'Diane being high'}/>
                    <h1 className='mb-2 text-6xl font-bold text-ht-gray-500'>AMAL S RAJ</h1>
                    <h3 className='mb-2 font-bold text-ht-gray-500'>Budding developer 💻, artist 🎨, gamer 🎮</h3>
                    <p className='pb-8 text-lg text-ht-gray-500'>Welcome to my little corner on the internet where I share and document what I learn about becoming a better developer, climbing the tech ladder and discovering myself.</p>
                </section>

                <SearchBar className={'mx-12 mt-8'} />
                <FeaturedPosts className={'mt-16'}/>
                <SteamRecents className={'mt-16'} recentGames={recentGames}/>
            </main>
        </div>
    )
}

