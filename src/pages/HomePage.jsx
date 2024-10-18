import homeHeroImg from '../assets/Containerhome-hero-desktop.png'
import rotatingLogo from '../assets/Containercirclelogodsktop.svg'
import iconFindHome from '../assets/Icon-find-home.svg'
import iconUnlockValue from '../assets/Icon-unlock-value.svg'
import iconPropertyMgmt from '../assets/Icon-propty-mgmt.svg'
import iconSmartInvestment from '../assets/Icon-smart-investment.svg'
import propertyImageOne from '../assets/Imagepropty1.png'
import propertyImageTwo from '../assets/Imagepropty-2.png'
import propertyImageThree from '../assets/Imagepropty-3.png'
import profilePicOne from '../assets/Profile1.png'
import profilePicTwo from '../assets/Profile2.png'
import profilePicThree from '../assets/Profile3.png'
import { LinksCard } from '../components/sharedComponents/LinksCard'
import PropertyCard from '../components/homePage/PropertyCard'
import ReviewCard from '../components/homePage/ReviewCard'
import HomeSection from '../components/homePage/HomeSection'
import { HomeSectionHeader } from '../components/homePage/HomeSectionHeader'
import { SectionBody } from '../components/sharedComponents/SectionBody'
import FaqsCard from '../components/homePage/FaqsCard'
import StatsCard from '../components/sharedComponents/StatsCard'
import CtaComponent from "../components/sharedComponents/CtaComponent"
import { motion } from 'framer-motion'

export const heroInfo = {
    hidden: { x: -300 },
    show: {
        x: 0,
        transition: {
            type: 'spring',
            bounce: 0.1,
            duration: 2,
            ease: 'easeIn'
        }

    }
}
export const heroImage = {
    hidden: { x: 300, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.1,
            duration: 2,
            ease: 'easeIn'
        }

    }
}

export default function HomePage() {
  
    return (
        <>
            <section id='home-hero-section' className='relative flex flex-col-reverse pt-10 lg:pt-0 px-4 lg:px-0 lg:flex-row md:justify-between'>
                <motion.section variants={heroInfo} initial='hidden' whileInView={'show'} viewport={{once:true}} id='info' className='mt-14 lg:mt-0 mb-10 lg:mb-0 lg:py-24 lg:w-[48%] lg:pl-20'>
                    <h1 className='font-semibold text-[28px] lg:text-5xl mb-4  lg:mb-5  lg:leading-[120%]'>
                        Discover Your Dream Property with Estatein
                    </h1>
                    <p className='text-sm text-[#999999] mb-10 lg:mb-12 md:text-base'>
                        Your journey to finding the perfect property begins here.
                        Explore our listings to find the home that matches your dreams.
                    </p>
                    <div className='home-cta-buttons flex flex-col gap-4 mb-10 xl:mb-24 md:flex-row'>
                        <button className='border border-[#262626] rounded-lg py-[14px] px-5'>
                            Learn More
                        </button>
                        <button className='py-[14px] px-5 rounded-lg bg-[#703BF7]'>
                            Browse Properties
                        </button>
                    </div>
                    <div><StatsCard /></div>
                </motion.section>
                <motion.div
                    id='rotating-logo'
                    className='absolute  z-10 w-[117px] md:w-[129px] top-[265px] md:top-[55%] min-[820px]:top-[58%] lg:top-[95px] lg:left-[48%]'
                    animate={{ rotate: [0, 360]}}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: 'linear',
                    }}
                >
                    <img src={rotatingLogo} className='w-full h-full object-cover' alt="" />
                </motion.div>
                <motion.div variants={heroImage} initial='hidden' whileInView={'show'} viewport={{once:true}} id='home-hero-img' className='w-full h-[302px] md:h-auto lg:w-[48%]'>
                    <img src={homeHeroImg} className='w-full h-full rounded-xl lg:rounded-none' alt="landing page hero section image" loading='eager' />
                </motion.div>
            </section>
            <section
            id='services-button-cards' 
            className='px-4 lg:px-0 mb-[60px] lg:mb-[90px]'
            >
                <div className=' w-full grid grid-cols-2 lg:grid-cols-4 gap-[10px] p-[10px] rounded-xl lg:rounded-none shadow-[0_0_0_8px_rgba(25,25,25,1)]'>
                    <LinksCard cardIcon={iconFindHome}>
                        Find Your Dream Home
                    </LinksCard>
                    <LinksCard cardIcon={iconUnlockValue}>
                        Unlock Property Value
                    </LinksCard>
                    <LinksCard cardIcon={iconPropertyMgmt}>
                        Effortless Property Management
                    </LinksCard>
                    <LinksCard cardIcon={iconSmartInvestment}>
                        Smart Investments, Informed Decisions
                    </LinksCard>
                </div>
            </section>
            <HomeSection id={'properties-section'}>
                <HomeSectionHeader heading={'Featured Properties'} buttonName={'View All Properties'}>
                    Explore our handpicked selection of featured properties. Each listing offers a glimpse
                    into exceptional homes and investments available through Estatein. <span className="hidden lg:inline-block">Click &quot;View Details&quot; for more information.</span>
                </HomeSectionHeader>
                <SectionBody id={'properties'} totalLength={60} currentIndex={1}>
                    <PropertyCard propertyImage={propertyImageOne} bedroom={4} bathroom={3} price={'$500,000'} propertyType={'Villa'} >
                        <h3 className='font-bold text-lg'>Seaside Serenity Villa</h3>
                        <p className='text-[#999999] text-sm'>A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... <a href="" className='text-white underline'>Read More</a></p>
                    </PropertyCard>
                    <PropertyCard propertyImage={propertyImageTwo} bedroom={2} bathroom={2} price={'$600,000'} propertyType={'Villa'}>
                        <h3 className='font-bold text-lg'>
                            Metropolitan Haven
                        </h3>
                        <p className='text-[#999999] text-sm'>
                            A chic and fully-furnished 2-bedroom apartment with panoramic city views...  <a href="" className='text-white underline'>Read More</a>
                        </p>
                    </PropertyCard>
                    <PropertyCard propertyImage={propertyImageThree} bedroom={3} bathroom={3} price={'$500,000'} propertyType={'Villa'}>
                        <h3 className='font-bold text-lg'>Rustic Retreat Cottage</h3>
                        <p className='text-[#999999] text-sm'>An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...<a href="" className='text-white underline'>Read More</a></p>
                    </PropertyCard>
                </SectionBody>
            </HomeSection>
            <HomeSection id={'testimonials-section'}>
                <HomeSectionHeader heading={'What Our Clients Say'} buttonName={'View All Testimonials'}>
                    Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                </HomeSectionHeader>
                <SectionBody id={'reviews'}>
                    <ReviewCard userName={'Wade Warren'} userLocation={'USA, California'} profilePic={profilePicOne}>
                        <h3 className='font-semibold text-lg lg:text-xl mb-[6px] lg:mb-[10px]'>
                            Exceptional Service!
                        </h3>
                        <p className='text-sm lg:text-base mb-6 lg:mb-[30px]'>
                            Our experience with Estatein was outstanding. Their team&apos;s dedication and professionalism made finding our dream home a breeze. Highly recommended!
                        </p>
                    </ReviewCard>
                    <ReviewCard userLocation={'USA, Florida'} userName={'Emelie Thompson'} profilePic={profilePicTwo}>
                        <h3 className='font-semibold text-lg lg:text-xl mb-[6px] lg:mb-[10px]'>
                            Efficient and Reliable
                        </h3>
                        <p className='text-sm lg:text-base mb-6 lg:mb-[30px]'>
                            Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn&apos;t be happier with the results.
                        </p>
                    </ReviewCard>
                    <ReviewCard userLocation={'USA, Miami'} userName={'John Mans'} profilePic={profilePicThree}>
                        <h3 className='font-semibold text-lg lg:text-xl mb-[6px] lg:mb-[10px]'>
                            Trusted Advisors
                        </h3>
                        <p className='text-sm lg:text-base mb-6 lg:mb-[30px]'>
                            The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!
                        </p>
                    </ReviewCard>
                </SectionBody>
            </HomeSection>
            <HomeSection id={'FAQs-section'}>
                <HomeSectionHeader heading={'frequently asked questions'} buttonName={'View all FAQs'}>
                    Find answers to common questions about Estatein&apos;s services, property listings, and the real estate process. We&apos;re here to provide clarity and assist you every step of the way.
                </HomeSectionHeader>
                <SectionBody id={'FAQs'}>
                    <FaqsCard>
                        <h3 className='font-semibold text-lg lg:text-xl mb-5 lg:mb-6'>
                            How do I search for properties on Estatein?
                        </h3>
                        <p className='text-sm lg:text-base text-[#999999]'>
                            Learn how to use our user-friendly search tools to find properties that match your criteria.
                        </p>
                    </FaqsCard>
                    <FaqsCard>
                        <h3 className='font-semibold text-lg lg:text-xl mb-5 lg:mb-6'>
                            What documents do I need to sell my property through Estatein?
                        </h3>
                        <p className='text-sm lg:text-base text-[#999999]'>
                            Find out about the necessary documentation for listing your property with us.
                        </p>
                    </FaqsCard>
                    <FaqsCard>
                        <h3 className='font-semibold text-lg lg:text-xl mb-5 lg:mb-6'>
                            How can I contact an Estatein agent?
                        </h3>
                        <p className='text-sm lg:text-base text-[#999999]'>
                            Discover the different ways you can get in touch with our experienced agents.
                        </p>
                    </FaqsCard>
                </SectionBody>
            </HomeSection>
            <CtaComponent/>
        </>
    )
}