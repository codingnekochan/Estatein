import { LinksCard } from "../components/sharedComponents/LinksCard";
import iconEmail from '../assets/Icon-contact-email.svg'
import iconTelephone from '../assets/Icon-contact-phone.svg'
import iconLocation from '../assets/Icon-contact-location.svg'
import iconSocials from '../assets/Icon-contact-social.svg'
import { SectionHeader } from "../components/sharedComponents/SectionHeader";
import InputComponent from "../components/sharedComponents/InputComponent";
import TextAreaComponent from "../components/sharedComponents/TextAreaComponent";
import TermsComponent from "../components/sharedComponents/TermsComponent";
import { SelectInquiryComponent, SelectReferralComponent } from "../components/contactPage/ContactFormComponents";
import AddressCard from "../components/contactPage/AddressCard";
import imageOne from '../assets/Imagegallery1.png'
import imageTwo from '../assets/Imagegallery2.png'
import imageThree from '../assets/Imagegallery3.png'
import imageFour from '../assets/Imagegallery4.png'
import imageFive from '../assets/Imagegallery5.png'
import imageSix from '../assets/Imagegallery6.png'

export default function ContactPage() {
    return <>
        <section id="contact-hero-section">
            <h2>
                Get in Touch with Estatein
            </h2>
            <p>
                Welcome to Estatein&apos;s Contact Us page. We&apos;re here to assist you with any inquiries, requests, or feedback you may have. Whether you&apos;re looking to buy or sell a property, explore investment opportunities, or simply want to connect, we&apos;re just a message away. Reach out to us, and let&apos;s start a conversation.
            </p>
        </section>
        <section id="contact-cards">
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
        <section id="connect">
            <SectionHeader heading={"Let's Connect"}>
                We&apos;re excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you&apos;re a prospective client, partner, or simply curious about our services, we&apos;re here to answer your questions and provide the assistance you need.
            </SectionHeader>
            <section id="contact-form">
                <form action="#" method="post">
                    <InputComponent type={'text'} label={'First Name'} id={'contact-firstName'} placeholder={'Enter First Name'} />
                    <InputComponent type={'text'} label={'Last Name'} id={'contact-lastName'} placeholder={'Enter Last Name'} />
                    <InputComponent type={'email'} label={'Email'} id={'contact-email'} placeholder={'Enter your Email'} />
                    <InputComponent type={'tel'} label={'Phone'} id={'contact-phone'} placeholder={'Enter Phone'} />
                    <SelectInquiryComponent />
                    <SelectReferralComponent />
                    <TextAreaComponent placeholder={'Enter message'} id={'contact-message'} label={'Message'} />
                    <TermsComponent />
                </form>
            </section>
        </section>
        <section id="contact-locations">
            <SectionHeader heading={'Discover Our Office Locations'}>
                Estatein is here to serve you across multiple locations. Whether you&apos;re looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you
            </SectionHeader>
            <div className="filter-buttons">
                <button id="all">All</button>
                <button id="regional">Regional</button>
                <button id="international">International</button>
            </div>
            <div className="locations-list">
                <AddressCard address={'123 Estatein Plaza, City Center, Metropolis'} location={'Main Headquarters'} mail={'info@estatein.com'} telephone={'+1 (123) 456-7890'} city={'Metropolis'} >
                    Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.
                </AddressCard>
                <AddressCard address={'456 Urban Avenue, Downtown District, Metropolis'} location={'Regional Offices'} mail={'info@estatein.com'} telephone={'+1 (123) 456-7890'} city={'Metropolis'} >
                    Estatein&apos;s presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.
                </AddressCard>
            </div>
        </section>
        <section id="gallery">
            <SectionHeader heading={"Explore Estatein's World"}>
                Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.
            </SectionHeader>
            <div className="image"><img src={imageOne} alt="" /></div>
            <div className="image"><img src={imageTwo} alt="" /></div>
            <div className="image"><img src={imageThree} alt="" /></div>
            <div className="image"><img src={imageFour} alt="" /></div>
            <div className="image"><img src={imageFive} alt="" /></div>
            <div className="image"><img src={imageSix} alt="" /></div>
        </section>
    </>
}