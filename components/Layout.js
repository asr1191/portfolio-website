import NavBar from "@components/NavBar";

export function Footer() {
    return (
        <div className='mt-8 '>
            <div className='border-gray-400 border-t-[1px] max-w-5xl mx-auto'></div>
            <p className='py-4 mx-auto text-center text-ht-gray-600'>Amal S Raj</p>
        </div>
    )
}

export default function Layout({ children }) {

    const pageName = children.type.name;

    return (
        <>
            {pageName !== 'Test' ? <div className="min-h-screen bg-ht-gray-700">
                <NavBar />
                <main className="max-w-3xl pb-20 mx-auto pt-[6.5rem]">
                    {children}
                </main>
                <Footer />
            </div> : children}
        </>
    )
}