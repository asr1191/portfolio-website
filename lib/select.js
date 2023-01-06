export default function select(obj, keys) {
    return keys.reduce((accumulator, key) => {
        accumulator[key] = obj[key]
        return accumulator;
    }, {})
}