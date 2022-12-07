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
    return (
        <div className="min-h-screen bg-ht-gray-700">
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}