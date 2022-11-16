import Image from "next/image"

export default function SteamRecents({ className, games }) {

    games = [
        {
            title: 'Elite Dangerous',
            picURL: '',
            tags: ['Space Sim', 'Space', 'Open World', 'Exploration']
        },
        {
            title: 'The Cycle: Frontier',
            picURL: '',
            tags: ['Free-to-Play', 'Multiplayer', 'PvE', 'PvP']
        },
        {
            title: 'GTFO',
            picURL: '',
            tags: ['Online Co-op', 'Horror', 'FPS', 'Shooter']
        },
    ]

    return (
        <section className={className}>
            <h1 className="text-4xl font-bold text-ht-primary-900">What I&apos;ve Been Playing</h1>
            <h2 className="pt-2 pb-8 text-lg font-semibold text-ht-gray-600">I’ve been playing these games recently for the last few weeks. I don’t usually play a single game for too long, prefering to experiment with a wide variety till I find something that clicks.</h2>

            <ul>
                {games.map((game, index) => {
                    return (
                    <li 
                        key={game.title}
                        className={'mt-4 border-b-[1px] pb-4 border-ht-gray-600'}
                    >
                        <div className="grid grid-cols-10 grid-rows-2">
                            <div className="col-start-1 col-end-2 row-span-1 place-self-center text-ht-gray-600"><p className="text-4xl">{('00' + index).slice(-2)}</p></div>
                            <div className="col-start-2 col-end-8 row-span-1 py-1 text-4xl text-ht-primary-900">{game.title}</div>
                            <div className="col-span-1 row-span-1 "></div>
                            <div className="flex items-center col-start-2 col-end-8 row-span-1 gap-2 ">
                                {game.tags.map((tag) => <span className="px-2 py-[1px] font-semibold rounded-full bg-ht-gray-600 text-ht-gray-500" key={tag}> {tag}</span>)}
                            </div>
                            <div className="col-start-8 col-end-11 row-start-1 row-end-3">
                                <Image src={'https://cdn.akamai.steamstatic.com/steam/apps/1336180/capsule_231x87.jpg'} width={231} height={87} className={'rounded-xl'}/>
                            </div>
    
                        </div>
                    </li>)
                })}
            </ul>

        </section>
    )
}