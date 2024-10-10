import aboutHeroImg from '../assets/about-hero-desktop.png'
import iconTrust from '../assets/Icontrust.svg'
import iconExcellence from '../assets/Iconexcellence.svg'
import iconClient from '../assets/Iconclient.svg'
import StarsDesign from '../components/sharedComponents/StarsDesign'
import StatsCard from '../components/sharedComponents/StatsCard'
import teamOne from '../assets/Imageteam1.png'
import teamTwo from '../assets/Imageteam2.png'
import teamThree from '../assets/Imageteam3.png'
import teamFour from '../assets/Imageteam4.png'
import TeamMemberCard from '../components/aboutPage/TeamMemberCard'
import StepsCard from '../components/aboutPage/StepsCard'
import AchievementsCard from '../components/aboutPage/AchievementCard'
import CompanyValueCard from '../components/aboutPage/CompanyValueCard'
import ClientTestimonyCard from '../components/aboutPage/ClientTestimonyCard'
import { SectionHeader } from '../components/sharedComponents/SectionHeader'
import { SectionBody } from '../components/sharedComponents/SectionBody'
import CtaComponent from "../components/sharedComponents/CtaComponent"

export default function AboutPage() {
    return (
        <>
            <section id="about-hero-section" className='flex flex-col-reverse lg:flex-row pt-[50px] lg:pt-[70px] 2xl:pt-[100px] px-[10px] lg:px-[70px] 2xl:px-40'>
                <div className='mt-4 lg:mt-0 lg:pt-6 lg:w-1/2 lg:pr-[60px]'>
                    <StarsDesign />
                    <h1 className='font-semibold text-2xl lg:text-[38px] mt-px lg:mt-2 mb-2 lg:mb-[10px] px-[6px] lg:pl-[10px]'>
                        Our Journey
                    </h1>
                    <p className='px-[6px] lg:pl-[10px] text-sm lg:text-base text-[#999999] mb-10 lg:mb-[50px]'>
                        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                        Over the years, we&apos;ve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
                    </p>
                    <div className='lg:pl-[10px]'>
                        <StatsCard />
                    </div>
                </div>
                <div className='lg:w-1/2 lg:h-[435/px] px-[6px] lg:pr-[10px]'>
                    <img src={aboutHeroImg} className='h-full w-full object-contain' alt="" />
                </div>
            </section>
            <section id='values-section' className='w-full mt-[60px] lg:mt-[120px] px-[10px] lg:px-[70px] flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-[60px]' >
                <div className="lg:w-1/2">
                    <SectionHeader heading={'Our Values'}>
                        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                    </SectionHeader>
                </div>
                <div className="px-[10px] w-full">
                    <div id='values-container' className='p-6 lg:p-[50px] rounded-lg shadow-[0_0_0_8px_rgba(25,25,25,1)]'>
                        <div className="center-line before:top-[50%] w-full flex flex-col lg:grid lg:grid-cols-2 justify-between gap-5 lg:gap-0">

                            <CompanyValueCard valueIcon={iconTrust} heading={'Trust'} customClass={'lg:pr-6 lg:pb-6 custom-right-border lg:before:h-full'}>
                                Trust is the cornerstone of every successful real estate transaction.
                            </CompanyValueCard>
                            <CompanyValueCard valueIcon={iconExcellence} heading={'Excellent'} customClass={'lg:pl-6 lg:pb-6'}>
                                We set the bar high for ourselves. From the properties we list to the services we provide.
                            </CompanyValueCard>
                            <CompanyValueCard valueIcon={iconClient} heading={'Client-Centric'} customClass={'lg:pr-6 lg:pt-6 custom-right-border lg:before:h-[90%]'}>
                                Your dreams and needs are at the center of our universe. We listen, understand.
                            </CompanyValueCard>
                            <CompanyValueCard valueIcon={iconTrust} heading={'Our Commitment'} customClass={'lg:pl-6 lg:pt-6'}>
                                We are dedicated to providing you with the highest level of service, professionalism, and support.
                            </CompanyValueCard>
                        </div>
                    </div>
                </div>
            </section>
            <section id='achievements-section' className='mt-[60px] lg:mt-[90px] px-[10px] lg:px-[70px]'>
                <div className='lg:w-[83%]'>
                    <SectionHeader heading={'Our Achievements'}>
                        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                    </SectionHeader>
                </div>
                <div id='achievements-client' className='px-[10px] flex flex-col lg:flex-row gap-5 lg:gap-[30px]'>
                    <AchievementsCard heading={'3+ Years of Excellence'}>
                        With over 3 years in the industry, we&apos;ve amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.
                    </AchievementsCard>
                    <AchievementsCard heading={'Happy Clients'} >
                        Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.
                    </AchievementsCard>
                    <AchievementsCard heading={'Industry Recognition'}>
                        We&apos;ve earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.
                    </AchievementsCard>
                </div>
            </section>
            <section id='howto-section' className='mt-[60px] lg:mt-[90px] px-[10px] lg:px-[70px]'>
                <div className="lg:w-[83%]">
                    <SectionHeader heading={'Navigating the Estatein Experience'}>
                        At Estatein, we&apos;ve designed a straightforward process to help you find and purchase your dream property with ease. Here&apos;s a step-by-step guide to how it all works.
                    </SectionHeader>
                </div>
                <div id='steps-container' className='px-[10px] grid md:grid-cols-2 xl:grid-cols-3 gap-[30px] lg:gap-5 place-items-stretch'>
                    <StepsCard step={'01'} heading={'Discover a World of Possibilities'}>
                        Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.
                    </StepsCard>
                    <StepsCard step={'02'} heading={'Narrow down your choices'}>
                        Once you&apos;ve found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.
                    </StepsCard>
                    <StepsCard step={'03'} heading={'Personalized Guidance'}>
                        Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.
                    </StepsCard>
                    <StepsCard step={'04'} heading={'See It for Yourself'}>
                        Arrange viewings of the properties you&apos;re interested in. We&apos;ll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.
                    </StepsCard>
                    <StepsCard step={'05'} heading={'Making Informed Decisions'}>
                        Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.
                    </StepsCard>
                    <StepsCard step={'06'} heading={'Getting the Best Deals'}>
                        We&apos;ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.
                    </StepsCard>
                </div>
            </section>
            <section id='team-section' className='mt-[60px] lg:mt-[90px] px-[10px] lg:px-[70px] border'>
                <div className='lg:w-[83%]'>
                    <SectionHeader heading={'Meet the Estatein Team'}>
                        At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality
                    </SectionHeader>
                </div>
                <div id='team' className='w-full px-[10px] flex flex-col lg:flex-row gap-5'>
                    <TeamMemberCard teamMemberName={'Max Mitchell'} teamMemberPic={teamOne} teamMemberRole={'Founder'} />
                    <TeamMemberCard teamMemberName={'Sarah Johnson'} teamMemberPic={teamTwo} teamMemberRole={'Chief Real Estate Officer'} />
                    <TeamMemberCard teamMemberName={'David Brown'} teamMemberPic={teamThree} teamMemberRole={'Head of Property Management'} />
                    <TeamMemberCard teamMemberName={'Michael Turner'} teamMemberPic={teamFour} teamMemberRole={'Legal Counsel'} />
                </div>
            </section>
            <section id='client-section' className='mt-[60px] lg:mt-[90px] px-[10px] lg:px-[70px] border'>
                <div className='lg:w-[83%]'>
                    <SectionHeader heading={'Our Valued Clients'}>
                        At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we&apos;ve had the pleasure of serving
                    </SectionHeader>
                </div>
                <SectionBody>
                    <ClientTestimonyCard year={'2019'} companyName={'ABC Corporation'} companyCategory={'Luxury Home Development'} companyDomain={'Commercial Real Estate'}>
                        Estatein&apos;s expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.
                    </ClientTestimonyCard>
                    <ClientTestimonyCard year={'2018'} companyName={'GreenTech Enterprise'} companyCategory={'Retail Space'} companyDomain={'Commercial Real Estate'}>
                        Estatein&apos;s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.
                    </ClientTestimonyCard>
                </SectionBody>
            </section>
            <CtaComponent />

        </>
    )
}
