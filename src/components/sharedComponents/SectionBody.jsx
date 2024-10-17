// import backButton from 'src/assets/Icon-arrow-back.svg'
import backButton from '../../assets/Icon-arrow-back.svg'
import forwardButton from '../../assets/Icon-arrow-forward.svg'
import { motion } from 'framer-motion'

export function SectionBody({ children, id, currentIndex, totalLength }) {
    const container = {
        hidden: { y: 300 },
        show: {
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.25,
                duration: 1,
                ease: 'easeIn'
            }
        }
    }
    return <>
        <div className='px-[6px] lg:px-[10px]'>
            <motion.section
                variants={container}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true }}
                id={id}
                className='section-body min-w-full flex overflow-x-hidden gap-4 justify-between lg:gap-5 py-4 px-2'
            >
                {children}
            </motion.section>
            <div className='h-[1px] bg-[#262626] w-full mt-7 mb-10'></div>
            <div className='list-length flex justify-end'>
                <div className='flex  gap-3 items-center pb-1 pr-2'>
                    <button className='w-[44px] h-[44px] border rounded-full p-2'>
                        <img src={backButton} className='w-full h-full object-contain' alt="" />
                    </button>
                    <p>
                        <span>{currentIndex}</span> of <span>{totalLength}</span>
                    </p>
                    <button className='w-[44px] h-[44px] border rounded-full p-2'>
                        <img src={forwardButton} className='w-full h-full object-contain' alt="" />
                    </button>
                </div>
            </div>
        </div >
    </>
}