import underConstruction from '../assets/under-construction.png'
import { heroImage,heroInfo } from '../utils/framer'
import { motion } from "framer-motion"

export default function UtilityPage() {
    return <>

        <section id="utility-page" className="flex justify-between flex-col-reverse xl:flex-row gap-4 md:gap-8 lg:gap-6 px-10  pt-10 pb-20 lg:p-20 border-b border-[#262626]">
            <motion.div variants={heroInfo} initial='hidden' whileInView={'show'} viewport={{once:true}} className='xl:w-[48%] text-center xl:text-left'>
                <h1 className=' font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6 xl:pt-40'>🚧 Page Under Construction 🚧</h1>
                <p className='text-base lg:text-xl '>I am working hard to bring you <span className='text-[#703BF7]'> this page</span> . Check back soon!</p>
            </motion.div>
            <motion.div
                className='xl:w-[48%] md:p-10 lg:p-0'
                variants={heroImage}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true }}
                animate={{
                    translateY: ['-20px', '0px']
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}>
                <div>
                    <img src={underConstruction} alt="" />
                </div>
            </motion.div>
        </section>

    </>
}