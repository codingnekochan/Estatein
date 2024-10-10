import { FilterButton } from "../components/sharedComponents/ButtonsComponent";
import iconLocation from '../assets/Iconlocation.svg'
import iconPropertyType from '../assets/Iconpropty-type.svg'
import iconPropertyPrice from '../assets/Iconpropty-price.svg'
import iconBuildYear from '../assets/Iconbuild-year.svg'
import iconProptySize from '../assets/Iconpropty-size.svg'
import { SectionHeader } from "../components/sharedComponents/SectionHeader";
import { SectionBody } from "../components/sharedComponents/SectionBody";
import { AvailablePropertiesCard } from "../components/propertyPage/AvailablePropertiesCard";
import propertyOne from '../assets/Imagepropty1.png'
import propertyTwo from '../assets/Imagepropty-2.png'
import propertyThree from '../assets/Imagepropty-3.png'
import { SelectAmountComponent, SelectBudgetComponent, SelectLocationComponent, SelectPropertyTypeComponent } from "../components/propertyPage/PropertyFormComponents.jsx";
import InputComponent from "../components/sharedComponents/InputComponent";
import TextAreaComponent from "../components/sharedComponents/TextAreaComponent";
import TermsComponent from "../components/sharedComponents/TermsComponent";
export default function PropertiesPage() {
    return <>
        <section id="properties-hero-section">
            <h1>Find Your Dream Property</h1>
            <p>
                Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey
            </p>
            <section id="search-properties-section">
                <div className="search-box">
                    <label htmlFor="search-form"></label>
                    <input type="search" name="search-form" id="search-form" placeholder="Search for a Property" />
                    <button>
                        <p>Find Property</p>
                    </button>
                </div>
                <div className="filters">
                    <FilterButton name={'Location'} id={'Location'} filterIcon={iconLocation} />
                    <FilterButton name={'Property Type'} id={'type'} filterIcon={iconPropertyType} />
                    <FilterButton name={'Pricing Range'} id={'pricing'} filterIcon={iconPropertyPrice} />
                    <FilterButton name={'Property Size'} id={'size'} filterIcon={iconProptySize} />
                    <FilterButton name={'Build Year'} id={'year'} filterIcon={iconBuildYear} />
                </div>
            </section>
            <section>
                <SectionHeader heading={'Discover a World of Possibilities'}>
                    Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home
                </SectionHeader>
                <SectionBody id={'available-properties'} totalLength={60} currentIndex={1}>
                    <AvailablePropertiesCard price={'$1,250,000'} propertyImage={propertyOne} motto={'Coastal Escapes - Where Waves Beckon'} propertyName={'Seaside Serenity Villa'}>
                        Wake up to the soothing melody of waves. This beachfront villa offers...
                    </AvailablePropertiesCard>
                    <AvailablePropertiesCard price={'$650,000'} propertyImage={propertyTwo} motto={'Urban Oasis - Life in the Heart of the City'} propertyName={'Metropolitan Haven'}>
                        Immerse yourself in the energy of the city. This modern apartment in the heart...
                    </AvailablePropertiesCard>
                    <AvailablePropertiesCard price={'$350,000'} propertyImage={propertyThree} motto={"Countryside Charm - Escape to Nature's Embrace"} propertyName={'Rustic Retreat Cottage'}>
                        Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...
                    </AvailablePropertiesCard>
                </SectionBody>
            </section>
            <section>
                <SectionHeader heading={"Let's Make It Happen"}>
                    Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don&apos;t wait; let&apos;s embark on this exciting journey together.
                </SectionHeader>
                <form action="" method="post">
                    <InputComponent id={'firstName'} type={'text'} label={'First Name'} placeholder={'Enter First Name'} />
                    <InputComponent id={'lastName'} type={'text'} label={'Last Name'} placeholder={'Enter Last Name'} />
                    <InputComponent id={'email'} type={'email'} label={'Email'} placeholder={'Enter your Email'} />
                    <InputComponent id={'phone'} type={'tel'} label={'Phone'} placeholder={'Enter your Phone'} />
                    <SelectLocationComponent />
                    <SelectPropertyTypeComponent />
                    <SelectAmountComponent id={'bathroom'} label={'No of Bathrooms'} />
                    <SelectAmountComponent id={'bedroom'} label={'No of Bedrooms'} />
                    <SelectBudgetComponent />
                    <TextAreaComponent id={'property-message'} label={'Message'} placeholder={'Enter your message here..'} />
                    <TermsComponent />
                </form>
            </section>
        </section>
    </>
}
