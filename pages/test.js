import bgRingBase from '@images/bg-ring-base-2.png'
import bgRingGlow from '@images/bg-ring-glow-2.png'
import bgRingCloud from '@images/bg-ring-cloud.png'

import Image from 'next/image'

export default function Test() {
    return (
        <div className='h-[500vh] w-full bg-[#533e45] ds-background-aio pointer-events-none select-none overflow-hidden'>
            <div className='h-[100vh] w-[40vw] flex flex-col justify-center aspect-1 relative overflow-hidden mx-auto'>
                <Image src={bgRingBase} alt='' className='absolute left-0 right-0 z-10 mx-auto animate-spin-slow1' />
                <Image src={bgRingGlow} alt='' className='absolute left-0 right-0 z-20 mx-auto mix-blend-screen animate-wiggle' />
                <div className='absolute left-0 right-0 z-30 w-full overflow-visible aspect-1 ring-clouds-mask'>
                    <Image src={bgRingCloud} alt='' className='object-contain max-w-[300%]  animate-ring-cloud-move' />
                </div>
            </div>
            <div className='relative -mt-32 w-[3%] h-full mx-auto bg-transparent ds-line-gradient mix-blend-normal' />
        </div >
    )
}