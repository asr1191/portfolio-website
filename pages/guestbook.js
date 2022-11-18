// Guestbook inspired from https://leerob.io/guestbook

import GuestComments from '../components/GuestComments'

export default function Guestbook() {
    return (
        <div className='bg-ht-gray-700'>
            <main className='mx-auto max-w-3xl'>
                <h1 className='mt-8 text-5xl text-ht-primary-900 font-bold'>Guestbook </h1>
                <h3 className='mt-2 mb-8 text-ht-gray-600 text-lg font-bold '>Leave a comment below. It could be anything – appreciation, information, wisdom, or even humor. Surprise me!</h3>
                <section className='bg-ht-gray-800 ring-1 ring-ht-gray-600 rounded-lg p-8'>
                    <h3 className=' text-ht-gray-500 text-3xl font-semibold'>Sign the Guestbook</h3>
                    <h4 className=' mt-2 text-xl text-ht-gray-500'>Share a message for a future visitor of my site.</h4>
                    <form className='mt-4'>
                        <input className='placeholder:text-ht-gray-600 bg-ht-gray-700 w-full rounded-full text-xl' type={'text'} placeholder={'Your message...'}>
                        </input>
                    </form>
                    <p className='mt-4  text-ht-gray-500 text-xl'>Your information is only used to display your name and reply by email.</p>
                </section>

                <GuestComments />
            </main>
        </div>
    )
}
