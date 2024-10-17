import PropTypes from 'prop-types'
import iconBathroom from '/src/assets/Iconbathroom.svg'
import iconBedroom from '/src/assets/Iconbedroom.svg'
import iconVilla from '/src/assets/Iconvilla.svg'
import { PropertyDetailsButton } from '../sharedComponents/ButtonsComponent'

export default function PropertyCard({ propertyImage, bedroom, bathroom, propertyType, children, price }) {
   
    return <div id='property-card' className='border border-[#262626] flex flex-col justify-between flex-shrink-0 lg:flex-shrink p-6 w-full md:w-[48%] rounded-xl'>
        <div id='property-img' className='mb-4'>
            <img src={propertyImage} alt="" />
        </div>
        <div>
            {children}
            <div id='property-features' className='mt-5'>
                <ul className='flex flex-wrap items-center gap-[6px] w-full'>
                    <li className='flex gap-1 py-[6px] px-[14px] bg-[#1A1A1A] border border-[#262626] rounded-3xl'>
                        <img src={iconBedroom} alt="" />
                        <p>{bedroom}-Bedroom</p>
                    </li>
                    <li className='flex gap-1 py-[6px] px-[14px] bg-[#1A1A1A] border border-[#262626] rounded-3xl' >
                        <img src={iconBathroom} alt="" />
                        <p>{bathroom}-Bathroom</p>
                    </li>
                    <li className='flex gap-1 py-[6px] px-[14px] bg-[#1A1A1A] border border-[#262626] rounded-3xl'>
                        <img src={iconVilla} alt="" />
                        <p>{propertyType}</p>
                    </li>
                </ul>
                <div className='w-full flex flex-wrap justify-between mt-5'>
                    <p className='price text-sm text-[#999999]'>
                        Price
                        <br />
                        <span className="text-white text-semibold text-lg lg:text-[20px]">{price}</span>
                    </p>
                   <PropertyDetailsButton/>
                </div>
            </div>
        </div>
    </div>
}
PropertyCard.propTypes = {
    propertyImage: PropTypes.any,
    bedroom: PropTypes.any,
}