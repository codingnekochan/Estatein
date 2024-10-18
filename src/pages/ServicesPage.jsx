// icon/image import
import iconFindHome from '../assets/Icon-find-home.svg'
import iconUnlockValue from '../assets/Icon-unlock-value.svg'
import iconPropertyMgmt from '../assets/Icon-propty-mgmt.svg'
import iconSmartInvestment from '../assets/Icon-smart-investment.svg'
import iconValuation from '../assets/Iconvaluation.svg'
import iconMarketing from '../assets/Icon-marketing.svg'
import iconStrategies from '../assets/Icon-strategies.svg'
import iconNegotiation from '../assets/Icon-negotiation.svg'
import iconClosing from '../assets/Iconclosing.svg'
import iconTenant from '../assets/Icon-tenant.svg'
import iconMaintenance from '../assets/Icon-maintenance.svg'
import iconFinance from '../assets/Iconfinance.svg'
import iconGuardian from '../assets/Icon-guardian.svg'
import iconRoi from '../assets/Icon-roi.svg'
// shared component imports
import { SectionHeader } from "../components/sharedComponents/SectionHeader"
import { LearnMoreButton } from "../components/sharedComponents/ButtonsComponent"
import { LinksCard } from "../components/sharedComponents/LinksCard"
// page specific imports
import { HowToCard } from "../components/servicesPage/HowToCard"
import { ServicesCtaCard, ServicesCtaDetails } from "../components/servicesPage/ServicesCtaCard"

export default function ServicesPage() {
    return <>
        <section id="services-hero-section" className="services-hero-section px-4 md:px-10 lg:px-20 py-[50px] md:py-[75px] lg:py-[100px] border-b border-b-[#262626]">
            <h1 className="font-semibold text-[28px] lg:text-[38px] 2xl:text-5xl mb-[10px] 2xl:mb-[14px]">
                Elevate Your Real Estate Experience
            </h1>
            <p className="lg:w-[90%] text-[#999999] text-sm lg:text-base 2xl:text-lg">
                Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.
            </p>
        </section>
        <section id="services-list" className='w-full grid grid-cols-2 lg:grid-cols-4 gap-[10px] p-[10px] rounded-xl lg:rounded-none shadow-[0_0_0_8px_rgba(25,25,25,1)] mb-[60px] lg:mb-[90px]'> 
            <LinksCard cardIcon={iconFindHome}>
                Find Your Dream Home
            </LinksCard>
            <LinksCard cardIcon={iconUnlockValue} link={'#unlock-property'}>
                Unlock Property Value
            </LinksCard>
            <LinksCard cardIcon={iconPropertyMgmt} link={'#property-mgmt'}>
                Effortless Property Management
            </LinksCard>
            <LinksCard cardIcon={iconSmartInvestment} link={'#smart-investments'}>
                Smart Investments, Informed Decisions
            </LinksCard>
        </section>
        <section id="#unlock-property" className="px-[10px] md:px-9 lg:px-[70px] mt-[60px] lg:mt-[90px]">
            <SectionHeader heading={'Unlock Property Value'}>
                Selling your property should be a rewarding experience, and at Estatein, we make sure it is. <span className="max-md:hidden">Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey.</span>
            </SectionHeader>
            <div className="px-[6px] lg:px-[10px] grid md:grid-cols-3 gap-5"> 
                <HowToCard heading={'Valuation Mastery'} icon={iconValuation}>
                    Discover the true worth of your property with our expert valuation services.
                </HowToCard>
                <HowToCard heading={'Strategic Marketing'} icon={iconMarketing}>
                    Selling a property requires more than just a listing; it demands a strategic marketing.
                </HowToCard>
                <HowToCard heading={'Negotiation Wizardry'} icon={iconNegotiation}>
                    Negotiating the best deal is an art, and our negotiation experts are masters of it.
                </HowToCard>
                <HowToCard heading={'Closing Success'} icon={iconClosing}>
                    A successful sale is not complete until the closing. We guide you through the intricate closing process.
                </HowToCard>
                <div className="md:col-span-2 p-6 lg:p-10 border border-[#262626] bg-[#1A1A1A] bg-[url('./assets/unlock-bg-mobile.svg')] lg:bg-[url('./assets/unlock-bg-desktop.svg')] bg-no-repeat bg-cover bg-center rounded-[10px]">
                    <ServicesCtaCard heading={'Unlock the Value of Your Property Today'}>
                        <LearnMoreButton />
                        <ServicesCtaDetails>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</ServicesCtaDetails>
                    </ServicesCtaCard>
                </div>
            </div>
        </section>
        <section id="property-mgmt" className="px-[10px] md:px-9 lg:px-[70px] mt-[60px] lg:mt-[90px]">
            <SectionHeader heading={'Effortless Property Management'}>
                Owning a property should be a pleasure, not a hassle. Estatein&apos;s Property Management Service takes the stress out of property ownership<span className="max-md:hidden">, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you</span>
            </SectionHeader>
            <div className="px-[6px] lg:px-[10px] grid md:grid-cols-3 gap-5"> 
                <HowToCard heading={'Tenant Harmony'} icon={iconTenant}>
                    Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.
                </HowToCard>
                <HowToCard heading={'Maintenance Ease'} icon={iconMaintenance}>
                    Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.
                </HowToCard>
                <HowToCard heading={'Financial Peace of Mind'} icon={iconFinance}>
                    Managing property finances can be complex. Our financial experts take care of rent collection
                </HowToCard>
                <HowToCard heading={'Legal Guardian'} icon={iconGuardian}>
                    Stay compliant with property laws and regulations effortlessly.
                </HowToCard>
                <div className="md:col-span-2 p-6 lg:p-10 border border-[#262626] bg-[#1A1A1A] bg-[url('./assets/unlock-bg-mobile.svg')] lg:bg-[url('./assets/unlock-bg-desktop.svg')] bg-no-repeat bg-cover bg-center rounded-[10px]">
                    <ServicesCtaCard heading={'Experience Effortless Property Management'}>
                        <LearnMoreButton />
                        <ServicesCtaDetails>
                            Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                        </ServicesCtaDetails>
                    </ServicesCtaCard>
                </div>
            </div>
        </section>
        <section id='smart-investments' className="px-[10px] md:px-9 lg:px-[70px] mt-[60px] lg:mt-[90px] mb-[80px] lg:mb-[120px] flex max-md:flex-col gap-10">
            <div className="mart-investment-info">
                <SectionHeader heading={'Smart Investments, Informed Decisions'}>
                    Building a real estate portfolio requires a strategic approach. <span className="max-md:hidden">Estatein&apos;s Investment Advisory Service empowers you to make smart investments and informed decisions.</span>
                </SectionHeader>
                <div className="px-[6px] lg:px-[10px]">
                    <div className="border border-[#262626] bg-[url('./assets/unlock-bg-mobile.svg')] bg-no-repeat md:bg-right lg:bg-center bg-cover bg-[#1A1A1A] p-6 lg:p-10 rounded-lg">
                        <ServicesCtaCard heading={'Unlock Your Investments Potential'}>
                            <div className="col-span-full">
                                <ServicesCtaDetails>
                                    Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                                </ServicesCtaDetails>
                            </div>
                            <div className="col-span-full">
                                <LearnMoreButton />
                            </div>
                        </ServicesCtaCard>
                    </div>
                </div>
            </div>
            <div className="px-[6px] lg:px-[10px] bg-[#1A1A1A] grid md:grid-cols-2 gap-[10px] p-[10px] rounded-xl">
                <HowToCard heading={'Market Insight'} icon={iconValuation}>
                    Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions
                </HowToCard>
                <HowToCard heading={'ROI Assessment'} icon={iconRoi}>
                    Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments
                </HowToCard>
                <HowToCard heading={'Customized Strategies'} icon={iconStrategies}>
                    Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs
                </HowToCard>
                <HowToCard heading={'Diversification Mastery'} icon={iconGuardian}>
                    Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations
                </HowToCard>
            </div>
        </section>
    </>
}