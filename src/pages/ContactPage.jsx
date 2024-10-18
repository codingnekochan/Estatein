// image imports
import iconEmail from '../assets/Icon-contact-email.svg'
import iconTelephone from '../assets/Icon-contact-phone.svg'
import iconLocation from '../assets/Icon-contact-location.svg'
import iconSocials from '../assets/Icon-contact-social.svg'
import imageOne from '../assets/Imagegallery1.png'
import imageTwo from '../assets/Imagegallery2.png'
import imageThree from '../assets/Imagegallery3.png'
import imageFour from '../assets/Imagegallery4.png'
import imageFive from '../assets/Imagegallery5.png'
import imageSix from '../assets/Imagegallery6.png'
// shared component imports
import { SectionHeader } from "../components/sharedComponents/SectionHeader";
import InputComponent from "../components/sharedComponents/InputComponent";
import TextAreaComponent from "../components/sharedComponents/TextAreaComponent";
import TermsComponent from "../components/sharedComponents/TermsComponent";
import { LinksCard } from "../components/sharedComponents/LinksCard";
// page specific imports
import { SelectInquiryComponent, SelectReferralComponent } from "../components/contactPage/ContactFormComponents";
import AddressCard from "../components/contactPage/AddressCard";

import CtaComponent from "../components/sharedComponents/CtaComponent";
import StarsDesign from "../components/sharedComponents/StarsDesign";

export default function ContactPage() {
    return <>
        <section id="contact-hero-section" className="contact-hero-section px-4 md:px-10 lg:px-20 py-[50px] md:py-[75px] lg:pt-[150px]  lg:pb-[100px] 2xl:pb-40 border-b border-b-[#262626]">
            <h1 className="font-semibold text-[28px] lg:text-[38px] 2xl:text-5xl mb-[10px] 2xl:mb-[14px]">
                Get in Touch with Estatein
            </h1>
            <p className="lg:w-[89%] text-[#999999] text-sm lg:text-base 2xl:text-lg">
                Welcome to Estatein&apos;s Contact Us page. We&apos;re here to assist you with any inquiries, requests, or feedback you may have. <span className="max-md:hidden">
                    Whether you&apos;re looking to buy or sell a property, explore investment opportunities, or simply want to connect, we&apos;re just a message away. Reach out to us, and let&apos;s start a conversation.
                </span>
            </p>
        </section>
        <section id="contact-cards" className='w-full grid grid-cols-2 lg:grid-cols-4 gap-[10px] p-[10px] rounded-xl lg:rounded-none shadow-[0_0_0_8px_rgba(25,25,25,1)] mb-[60px] lg:mb-[90px]'>
            <LinksCard cardIcon={iconEmail} link={'#'}>
                info@estatein.com
            </LinksCard>
            <LinksCard cardIcon={iconTelephone} link={'#'}>
                +1 (123) 456-7890
            </LinksCard>
            <LinksCard cardIcon={iconLocation} link={'#'}>
                Main Headquarters
            </LinksCard>
            <LinksCard cardIcon={iconSocials} link={'#'}>
                <a href="instagram">Instagram</a>
                <a href="instagram">LinkedIn</a>
                <a href="instagram">Facebook</a>
            </LinksCard>
        </section>
        <section id="connect" className="px-[10px] md:px-9 lg:px-[70px] mb-[60px] lg:mb-[90px]">
            <SectionHeader heading={"Let's Connect"}>
                We&apos;re excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you&apos;re a prospective client, partner, or simply curious about our services, we&apos;re here to answer your questions and provide the assistance you need.
            </SectionHeader>
            <section id="contact-form" className="px-[6px] lg:px-[10px]">
                <form action="#" method="post" className="border border-[#262626] rounded-xl p-5 md:p-10 lg:p-20 grid md:grid-cols-3 gap-5 lg:gap-[30px]">
                    <InputComponent type={'text'} label={'First Name'} id={'contact-firstName'} placeholder={'Enter First Name'} />
                    <InputComponent type={'text'} label={'Last Name'} id={'contact-lastName'} placeholder={'Enter Last Name'} />
                    <InputComponent type={'email'} label={'Email'} id={'contact-email'} placeholder={'Enter your Email'} />
                    <InputComponent type={'tel'} label={'Phone'} id={'contact-phone'} placeholder={'Enter Phone'} />
                    <SelectInquiryComponent id={'inquiry-type'} label={'Inquiry Type'} />
                    <SelectReferralComponent id={'referral-type'} label={'How Did You Hear About Us?'} />
                    <div className="col-span-full">
                        <TextAreaComponent placeholder={'Enter message'} id={'contact-message'} label={'Message'} />
                    </div>
                    <div className="col-span-full">
                        <TermsComponent />
                    </div>
                </form>
            </section>
        </section>
        <section id="contact-locations" className="px-[10px] md:px-9 lg:px-[70px] mb-[60px] lg:mb-[90px]">
            <SectionHeader heading={'Discover Our Office Locations'}>
                Estatein is here to serve you across multiple locations. Whether you&apos;re looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you
            </SectionHeader>
            <div className="px-[6px] lg:px-[10px]">
                <div className="filter-buttons bg-[#1A1A1A] p-[10px] inline-flex justify-between items-center gap-[10px] rounded-lg text-sm mb-[30px] lg:mb-10">
                    <button id="all" className="w-full md:w-[125px] border border-[#262626] rounded-lg px-5 py-[14px] focus:bg-[#141414]">All</button>
                    <button id="regional" className="w-full md:w-[125px] border border-[#262626] rounded-lg px-5 py-[14px] focus:bg-[#141414]">Regional</button>
                    <button id="international" className="w-full md:w-[125px] border border-[#262626] rounded-lg px-5 py-[14px] focus:bg-[#141414]">International</button>
                </div>
                <div className="locations-list flex gap-5 max-md:flex-wrap w-full">
                    <AddressCard address={'123 Estatein Plaza, City Center, Metropolis'} location={'Main Headquarters'} mail={'info@estatein.com'} telephone={'+1 (123) 456-7890'} city={'Metropolis'} >
                        Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.
                    </AddressCard>
                    <AddressCard address={'456 Urban Avenue, Downtown District, Metropolis'} location={'Regional Offices'} mail={'info@estatein.com'} telephone={'+1 (123) 456-7890'} city={'Metropolis'} >
                        Estatein&apos;s presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.
                    </AddressCard>
                </div>
            </div>
        </section>
        <section id="gallery" className="px-4 lg:px-20 mb-20 lg:mb-[120px]">
            <div className="border border-[#262626] rounded-xl p-6 lg:p-[60px] bg-[url('./assets/abstract-gallery-mobile.svg')] md:bg-[url('./assets/abstract-gallery-desktop.svg')] md:bg-cover lg:bg-contain bg-no-repeat grid grid-cols-4 gap-[10px] lg:gap-5">
                <div className="image col-span-2"><img src={imageOne} alt="gallery image one" className="w-full h-full object-contain" /></div>
                <div className="image col-span-2"><img src={imageTwo} alt="gallery image two" className="w-full h-full object-contain" /></div>
                <div className="image col-span-2"><img src={imageThree} alt="gallery image three" className="w-full h-full object-contain" /></div>
                <div className="image col-span-1"><img src={imageFour} alt="gallery image four" className="w-full h-full object-contain" /></div>
                <div className="image col-span-1"><img src={imageFive} alt="gallery image five" className="w-full h-full object-contain" /></div>
                <section className="heading col-span-full md:col-span-2 pt-[15px] lg:pt-[10px]">
                    <StarsDesign />
                    <div className="px-[6px] lg:px-[10px] w-[97%] lg:w-full">
                        <h2 className="font-bold text-[28px] xl:text-[38px] capitalize lg:mt-[3px] lg:mb-[10px] text-nowrap" >
                            Explore Estatein's World
                        </h2>
                        <p className="text-sm lg:text-base text-[#999999] p-px">
                            Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.
                        </p>
                    </div>
                </section>
                <div className="image col-span-full md:col-span-2"><img src={imageSix} alt="gallery image six" className="w-full h-full object-contain" /></div>
            </div>
        </section>
        <CtaComponent />
    </>
}