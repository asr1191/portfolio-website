import axios from 'axios'

export default async function getRecentGamesData() {

    const { data } = await axios.get(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${process.env.STEAM_ID}&format=json`)
    const response = data.response

    let appidList = ''
    for (let i = 0; i < response.games.length;) {
        if (response.games[i].appid == 480) {
            response.games.splice(i, 1);
            continue;
        }
        appidList += (response.games[i].appid + ',')
        i++
    }

    const tagData = await axios.get(`https://store.steampowered.com/broadcast/ajaxgetbatchappcapsuleinfo?appids=${appidList}`)
    const apps = tagData.data.apps

    for (let i = 0; i < apps.length; i++) {
        response.games[i].tags = apps[i].tags
    }

    return response
}