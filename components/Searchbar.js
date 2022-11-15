export default function SearchBar({ className }) {

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={className}>
            <form onSubmit={onSubmit}>
                <input className="w-full px-8 text-4xl font-bold transition-all border-0 rounded-md hover:ring-ht-primary-800 text-ht-secondary-900 ring-2 ring-ht-gray-600 bg-ht-gray-800 focus:ring-ht-primary-900 focus:ring-2" type={'text'} placeholder={'Search...'}></input>
            </form>
        </div>
    )
}