// Guestbook inspired from https://leerob.io/guestbook

import Card from 'components/Card'
import GuestComments from 'components/GuestComments'

export default function Guestbook() {
    return (
        <div className='bg-ht-gray-700'>
            <Card 
                className='max-w-3xl mx-auto mt-8'
                title={'Guestbook'}
                subtitle={'Leave a comment below. It could be anything – appreciation, information, wisdom, or even humor. Surprise me!'}
            >
                <section className='p-8 rounded-lg bg-ht-gray-800 ring-1 ring-ht-gray-600'>
                    <h3 className='text-3xl font-semibold text-ht-gray-500'>Sign the Guestbook</h3>
                    <h4 className='mt-2 text-xl text-ht-gray-500'>Share a message for a future visitor of my site.</h4>
                    <form className='mt-4'>
                        <input className='w-full text-xl rounded-full placeholder:text-ht-gray-600 bg-ht-gray-700' type={'text'} placeholder={'Your message...'}>
                        </input>
                    </form>
                    <p className='mt-4 text-xl text-ht-gray-500'>Your information is only used to display your name and reply by email.</p>
                </section>

                <GuestComments />
            </Card>
        </div>
    )
}
