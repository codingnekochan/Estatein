//icon imports
import iconLocation from '../assets/Iconlocation.svg'
import iconPropertyType from '../assets/Iconpropty-type.svg'
import iconPropertyPrice from '../assets/Iconpropty-price.svg'
import iconBuildYear from '../assets/Iconbuild-year.svg'
import iconProptySize from '../assets/Iconpropty-size.svg'
import iconSearch from '../assets/Iconsearch.svg'
import propertyOne from '../assets/Imagepropty1.png'
import propertyTwo from '../assets/Imagepropty-2.png'
import propertyThree from '../assets/Imagepropty-3.png'
// shared component imports
import { SectionHeader } from "../components/sharedComponents/SectionHeader";
import { SectionBody } from "../components/sharedComponents/SectionBody";
import { FilterButton } from "../components/sharedComponents/ButtonsComponent";
import InputComponent from "../components/sharedComponents/InputComponent";
import TextAreaComponent from "../components/sharedComponents/TextAreaComponent";
import TermsComponent from "../components/sharedComponents/TermsComponent";
import CtaComponent from "../components/sharedComponents/CtaComponent.jsx"
// page specific imports
import { AvailablePropertiesCard } from "../components/propertyPage/AvailablePropertiesCard";
import { InputRadioComponent, SelectAmountComponent, SelectBudgetComponent, SelectLocationComponent, SelectPropertyTypeComponent } from "../components/propertyPage/PropertyFormComponents.jsx";

export default function PropertiesPage() {
    return <>
        <section id="properties-hero-section" className="properties-hero-section px-4 md:px-10 lg:px-20 py-[50px] md:py-[75px] lg:pt-[100px] 2xl:pt-[150px] lg:pb-[130px] 2xl:pb-40 lg:mb-[193px] border-b border-b-[#262626]">
            <h1 className="font-semibold text-[28px] lg:text-[38px] 2xl:text-5xl mb-[10px] 2xl:mb-[14px]">Find Your Dream Property</h1>
            <p className="text-sm lg:text-base 2xl:text-lg">
                Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey
            </p>
        </section>
        <section id="search-properties-section" className="max-lg:mt-10 max-lg:mb-[60px] px-4 lg:z-20 lg:absolute lg:flex lg:flex-col top-[435px] w-full text-sm">
            <div className="bg-[#141414] lg:w-[78%] rounded-xl lg:rounded-b-none lg:rounded-t-xl lg:shadow-[0_0_0_10px_rgba(25,25,25,1)] search-box mx-auto max-lg:mb-5 border border-[#262626] p-[10px] lg:p-4 flex justify-between items-center gap-5 lg:gap-[50px]">
                <label htmlFor="search-form" className="lg:w-[80%]">
                    <input type="search" name="search-form" id="search-form" placeholder="Search for a Property" className="pl-2 lg:pl-1 w-full bg-inherit placeholder:text-[#666666] placeholder:text-base lg:placeholder:text-xl" />
                </label>
                <button className="bg-[#703BF7] gap-[6px] flex px-5 py-[14px] items-center rounded-lg">
                    <img src={iconSearch} alt="search icon" className="w-5 h-5" />
                    <span className="max-md:hidden text-nowrap">Find Property</span>
                </button>
            </div>
            <div className="filters lg:w-[88%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 p-5 lg:p-[10px] bg-[#1A1A1A] rounded-xl">
                <FilterButton name={'Location'} id={'Location'} filterIcon={iconLocation} />
                <FilterButton name={'Property Type'} id={'type'} filterIcon={iconPropertyType} />
                <FilterButton name={'Pricing Range'} id={'pricing'} filterIcon={iconPropertyPrice} />
                <FilterButton name={'Property Size'} id={'size'} filterIcon={iconProptySize} />
                <FilterButton name={'Build Year'} id={'year'} filterIcon={iconBuildYear} />
            </div>
        </section>
        <section className='px-[10px] md:px-9 lg:px-[70px] mb-[60px] lg:mb-[90px]'>
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
        <section className='px-[10px] md:px-9 lg:px-[70px] mb-20 lg:mb-[120px]'>
            <SectionHeader heading={"Let's Make It Happen"}>
                Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don&apos;t wait; let&apos;s embark on this exciting journey together.
            </SectionHeader>
            <div className="px-[6px] lg:px-[10px]">
                <form action="" method="post" className='property-info-request grid md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-[30px] border border-[#262626] p-5 md:p-7 lg:p-[50px] rounded-xl'>
                    <div>
                        <InputComponent id={'firstName'} type={'text'} label={'First Name'} placeholder={'Enter First Name'} />
                    </div>
                    <div>
                        <InputComponent id={'lastName'} type={'text'} label={'Last Name'} placeholder={'Enter Last Name'} />
                    </div>
                    <div>
                        <InputComponent id={'email'} type={'email'} label={'Email'} placeholder={'Enter your Email'} />
                    </div>
                    <div>
                        <InputComponent id={'phone'} type={'tel'} label={'Phone'} placeholder={'Enter your Phone'} />
                    </div>
                    <div>
                        <SelectLocationComponent id={'location'} label={'Preferred Location'} />
                    </div>
                    <div>
                        <SelectPropertyTypeComponent id={'property-type'} label={'Property Type'} />
                    </div>
                    <div>
                        <SelectAmountComponent id={'bathroom'} label={'No of Bathrooms'} />
                    </div>
                    <div>
                        <SelectAmountComponent id={'bedroom'} label={'No of Bedrooms'} />
                    </div>
                    <div className='md:col-span-3 xl:col-span-2'>
                        <SelectBudgetComponent  id={'budget'} label={'Budget'}/>
                    </div>
                    <div className='md:col-span-3 xl:col-span-2'>
                        <InputRadioComponent/>
                    </div>
                    <div className='md:col-span-3 xl:col-span-4'>
                        <TextAreaComponent id={'property-message'} label={'Message'} placeholder={'Enter your Message here..'} />
                    </div>
                    <div className='md:col-span-3 xl:col-span-4'>
                        <TermsComponent />
                    </div>
                </form>
            </div>
        </section>
        <CtaComponent />

    </>
}
