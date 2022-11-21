import { useRouter } from 'next/router';
import Link from 'next/link'
import { useCallback, useEffect, useRef } from 'react';

const navRoutes = ['home', 'guestbook', 'dashboard', 'blog', 'contact']


export default function NavBar({ navPage, pages }) {
    
    const detachNavBar = () => {
        const detachClasses = [
            'shadow-2xl',
            'backdrop-blur-md',
            'bg-ht-gray-600',
            'bg-opacity-50',
            'backdrop-grayscale-[0.4]'
        ]

        if (window.scrollY > 10) {
            navRef.current.classList.add(...detachClasses)
        } else {
            navRef.current.classList.remove(...detachClasses)
        }
    }

    const router = useRouter();
    const navRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', detachNavBar)
        
        return () => {
            window.removeEventListener('scroll', detachNavBar)
        }
    }, [])
    


    return (
        <nav ref={navRef} className={'px-4 py-4 pt-5 z-50 sticky flex justify-center inset-x-0 top-4 gap-4 rounded-xl max-w-4xl mx-auto transition-all'}>
            {navRoutes.map((route) => {
                return (
                    <NavLink
                        key={route}
                        href={`/${route}`}
                        text={route}
                        router={router}
                    />
                )
            })}
        </nav>
    )
}



function NavLink({ href, text, router }) {
    const isActive = router.asPath === (href === '/home' ? '/' : href);
    return (
        <Link href={href === '/home' ? '/' : href} >
            <span
                className={`px-4 py-2 pt-3 rounded-2xl font-josefinSans text-2xl hover:bg-ht-gray-800 hover:bg-opacity-75 transition-all ${isActive ? 'text-ht-primary-900' : 'text-ht-gray-500'}`}
            >
                {text}
            </span>
        </Link>
    )
}