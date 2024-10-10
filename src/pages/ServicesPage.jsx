import { LinksCard } from "../components/sharedComponents/LinksCard"
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
import { SectionHeader } from "../components/sharedComponents/SectionHeader"
import { HowToCard } from "../components/servicesPage/HowToCard"
import { ServicesCtaCard, ServicesCtaDetails } from "../components/servicesPage/ServicesCtaCard"
import { LearnMoreButton } from "../components/sharedComponents/ButtonsComponent"

export default function ServicesPage() {
    return <>
        <section id="services-hero-section">
            <h1>
                Elevate Your Real Estate Experience
            </h1>
            <p>
                Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.
            </p>
        </section>
        <section id="services-list">
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
        <section id="#unlock-property">
            <SectionHeader heading={'Unlock Property Value'}>
                Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey.
            </SectionHeader>
            <div>
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
                <ServicesCtaCard heading={'Unlock the Value of Your Property Today'}>
                    <LearnMoreButton />
                    <ServicesCtaDetails>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</ServicesCtaDetails>
                </ServicesCtaCard>
            </div>
        </section>
        <section id="property-mgmt">
            <SectionHeader heading={'Effortless Property Management'}>
                Owning a property should be a pleasure, not a hassle. Estatein&apos;s Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you
            </SectionHeader>
            <div>
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
                <ServicesCtaCard heading={'Experience Effortless Property Management'}>
                    <LearnMoreButton />
                    <ServicesCtaDetails>
                        Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                    </ServicesCtaDetails>
                </ServicesCtaCard>
            </div>
        </section>
        <section id='smart-investments'>
            <SectionHeader heading={'Smart Investments, Informed Decisions'}>
                Building a real estate portfolio requires a strategic approach. Estatein&apos;s Investment Advisory Service empowers you to make smart investments and informed decisions.
            </SectionHeader>
            <div>
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
            <ServicesCtaCard heading={'Unlock Your Investments Potential'}>
                <ServicesCtaDetails>
                    Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                </ServicesCtaDetails>
                <LearnMoreButton />
            </ServicesCtaCard>
        </section>
    </>
}