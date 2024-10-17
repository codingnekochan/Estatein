import { PropertyDetailsButton } from "../sharedComponents/ButtonsComponent";

export function AvailablePropertiesCard({ motto,propertyName,propertyImage, children,price,readMoreLink}) {
    return <div className='border border-[#262626] flex flex-col justify-between flex-shrink-0 lg:flex-shrink p-5 lg:p-[30px] w-full md:w-[49%] 2xl:w-[48%] rounded-xl'> 
        <div className="property-img mb-6">
            <img src={propertyImage} alt="available property image" />
        </div>
        <div className="inline-block text-sm border border-[#262626] py-[6px] px-3 bg-[#1A1A1A] rounded-3xl mb-4">
            <p className="motto">
                {motto}
            </p>
        </div>
        <div className="property-info mb-6 lg:mb-[26px]">
            <h3 className="font-semibold text-lg lg:text-xl mb-1">{propertyName}</h3>
            <p className="text-sm lg:text-base text-[#999999]">
                {children}
            <a href={readMoreLink} className="underline text-white">Read More</a>
            </p>
        </div>
        <div className="property-price w-full flex justify-between flex-wrap">
            <p className='price text-sm text-[#999999]'>
                Price
                <br />
                <span className="text-white text-semibold text-lg lg:text-[20px]">{price}</span>
            </p>
           <PropertyDetailsButton/>
        </div>
    </div>

}