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
                {games.map((game) => {
                    <li>

                    </li>
                })}
            </ul>

        </section>
    )
}