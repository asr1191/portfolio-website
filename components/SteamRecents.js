import Image from "next/image"
import Card from "@components/Card"

export default function SteamRecents({ className, recentGames }) {
    return (
        <Card
            title={`What I've Been Playing`}
            subtitle={`I’ve been playing these games recently for the last few weeks. I don’t usually play a single game for too long, prefering to experiment with a wide variety till I find something that clicks.`}
            className={className}
        >
            <ul>
                {recentGames.games.slice(0, 5).map((game, index) => {
                    return (
                        <li
                            key={game.appid}
                            className={'mt-4 border-b-[1px] pb-4 border-ht-gray-600'}
                        >
                            <div className="grid grid-rows-2 grid-cols-steamRecentGames">
                                <div className="col-start-1 col-end-2 row-span-1 place-self-center text-ht-gray-600"><p className="text-3xl">{('00' + (index + 1)).slice(-2)}</p></div>
                                <div className="col-start-2 col-end-3 row-span-2 py-1 mr-8 overflow-hidden">
                                    <h1 className="text-3xl font-semibold text-ht-primary-900">{game.name}</h1>
                                    <div className="tag-fade">
                                        <div className="flex items-center gap-2 mt-4 overflow-x-auto scrollbar-hide whitespace-nowrap">
                                            {game.tags.slice(0, 7).map((tag) => <p className="text-sm px-2 py-[1px] font-semibold rounded-full bg-ht-gray-600 text-ht-gray-500" key={tag.tagid}> {tag.name}</p>)}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-start-3 col-end-4 row-start-1 row-end-3">
                                    <a href={`https://store.steampowered.com/app/${game.appid}`}>
                                        <Image src={`https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/capsule_231x87.jpg`} alt={game.name} width={231} height={87} className={'rounded-xl hover:scale-110 hover:shadow-xl transition-all'} />
                                    </a>
                                </div>

                            </div>
                        </li>)
                })}
            </ul>
        </Card>
    )
}