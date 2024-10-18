import companyLogo from '../../assets/Logohome-logo.svg'
import iconEmail from '../../assets/Iconmail-outline.svg'
import iconSend from '../../assets/Iconsend.svg'
import socials from '../../assets/socials-icon.svg'


export default function FooterComponent() {
    return <>
        <section className='primary-footer flex max-md:flex-col justify-between md:gap-[80px] lg:gap-[150px] px-4 lg:px-20 py-[50px] lg:py-20 '>
            <div className=' max-md:mb-[50px]'>
                <div className='w-[113px] 2xl:w-[160px] mb-5 lg:mb-6'>
                    <img src={companyLogo} alt="company logo" />
                </div>
                <div className='border border-[#262626] flex justify-between items-center gap-2 py-[10px] px-5 rounded-lg'>
                    <label htmlFor="subscription-email"></label>
                    <img src={iconEmail} className='max-sm:w-5' alt="" />
                    <input className='w-full outline-none py-1 placeholder:text-[#999999] placeholder:text-sm bg-inherit' type="email" name="" id="subscription-email" placeholder='Enter your email' />
                    <img src={iconSend} className='max-sm:w-6' alt="" />
                </div>
            </div>
            <section id="footer-links" className='w-full grid grid-cols-2 lg:flex lg:justify-between lg:gap-4'>
                <FooterItems heading={'Home'} classList={"custom-right-border custom-bottom-border after:top-[101%] pr-4 before:h-[100%] lg:before:hidden lg:after:hidden"}>
                    <FooterLink link={'#home-hero-section'} linkName={'Hero'} />
                    <FooterLink link={'#features-section'} linkName={'Feature'} />
                    <FooterLink link={'#properties-section'} linkName={'Properties'} />
                    <FooterLink link={'#testimonials-section'} linkName={'Testimonials'} />
                    <FooterLink link={'#FAQs-section'} linkName={'FAQs'} />
                </FooterItems>
                <FooterItems heading={'About Us'} classList={'pl-4 lg:pl-0 custom-bottom-border lg:after:hidden'}>
                    <FooterLink link={'#story-section'} linkName={'Our Story'} />
                    <FooterLink link={'#works-section'} linkName={'Our Works'} />
                    <FooterLink link={'#howto-section'} linkName={'How it Works'} />
                    <FooterLink link={'#team-section'} linkName={'Our Team'} />
                    <FooterLink link={'#clients-section'} linkName={'Our Clients'} />
                </FooterItems>
                <FooterItems heading={'Properties'} classList={'custom-right-border custom-bottom-border pr-4 lg:pr-0 pt-4 lg:pt-0 before:h-[229px] lg:before:hidden lg:after:hidden'}>
                    <FooterLink link={'#portfolio-section'} linkName={'Portfolio'} />
                    <FooterLink link={'#categories-section'} linkName={'Categories'} />
                </FooterItems>
                <FooterItems heading={'Services'} classList={'pl-4 lg:pl-0 row-span-2 pt-4 lg:pt-0  custom-bottom-border lg:after:hidden'}>
                    <FooterLink link={'#valuation-section'} linkName={'Valuation Mastery'} />
                    <FooterLink link={'#strategic-section'} linkName={'Strategic Marketing'} />
                    <FooterLink link={'#negotiation-section'} linkName={'Negotiation Wizardry'} />
                    <FooterLink link={'#closing-section'} linkName={'Closing Success'} />
                    <FooterLink link={'#management-section'} linkName={'Property Management'} />
                </FooterItems>
                <FooterItems heading={'Contact'} classList={'pr-4 lg:pl-0 pt-4 lg:pt-0 custom-bottom-border lg:after:hidden'}>
                    <FooterLink link={'#contact-form-section'} linkName={'Contact Form'} />
                    <FooterLink link={'#offices-section'} linkName={'Our Offices'} />
                </FooterItems>
            </section>
        </section>
        <section className='secondary-footer bg-[#1A1A1A] flex flex-col justify-between items-center gap-2 lg:flex-row px-4 lg:px-40 py-5 lg:py-4'>
            <div id='copyrights' className='max-md:order-2 text-center lg:flex lg:gap-9'>
                <p>@2023 Estatein. All Rights Reserved.</p>
                <a href="#">Terms & Conditions</a>
            </div>
            <div id='social-links' className='max-md:order-1'>
                <img src={socials} alt="" />
            </div>
        </section>
    </>
}

export function FooterItems({ heading, children, classList }) {
    return <div className={classList}>
        <h2 className="text-[#999999] mb-4 text-base lg:text-lg">{heading}</h2>
        <ul className='flex flex-col gap-2 lg:gap-4 pb-4 lg:pb-0 font-medium text-sm lg:text-base'>
            {children}
        </ul>
    </div>
}
export function FooterLink({ link, linkName }) {
    return <li>
        <a href={link}>
            {linkName}
        </a>
    </li>
}

