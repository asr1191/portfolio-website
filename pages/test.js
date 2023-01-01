import bgRingBase from '@images/bg-ring-base-2.png'
import bgRingGlow from '@images/bg-ring-glow-2.png'
import bgRingCloud from '@images/bg-ring-cloud.png'
import comments from 'MOCK_DATA.json'

import Image from 'next/image'

export default function Test() {
    return (
        <div className='w-full relative h-full bg-[#533e45] ds-background-aio pointer-events-none select-none overflow-hidden '>
            <div className='absolute w-[5vw] top-[60.5vw] lg:top-[620px] lg:w-[51px] left-1 right-1 h-[24000px] mx-auto bg-transparent ds-line-gradient mix-blend-normal' />
            <div className='relative max-w-[1024px] flex flex-col justify-center mx-auto overflow-hidden aspect-1'>
                <Image src={bgRingBase} alt='' className='absolute left-0 right-0 z-10 mx-auto animate-spin-slow1' />
                <Image src={bgRingGlow} alt='' className='absolute left-0 right-0 z-20 mx-auto mix-blend-screen animate-wiggle' />
                <div className='absolute left-0 right-0 z-30 w-full overflow-visible aspect-1 ring-clouds-mask'>
                    <Image src={bgRingCloud} alt='' className='object-contain max-w-[300%] animate-ring-cloud-move' />
                </div>
            </div>
            <div className='relative top-0 z-[1]'>
                {comments.map((comment) => (
                    <div key={comment.time} className='p-4 mx-8 mt-4 transition-all rounded-lg hover:translate-x-4 bg-ht-gray-800'>
                        <p className='text-2xl text-ht-gray-500'>{comment.content}</p>
                        <p><span className='mt-4 text-gray-500'>{comment.name}</span><span className='mt-4 ml-4 text-gray-700'>/ {comment.time}</span></p>
                    </div>

                ))}
            </div>
        </div >
    )
}