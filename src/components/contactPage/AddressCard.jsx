import iconMail from '../../assets/Iconmail-fill.svg'
import iconPhone from '../../assets/Icontelephone.svg'
import iconLocation from '../../assets/IconlocationW.svg'
export default function AddressCard({location,address,children,mail,telephone,city}){
    return <div className='w-full border border-[#262626] rounded-lg p-6 lg:p-10 flex flex-col gap-6 lg:gap-[30px] justify-between items-stretch'>
        <div>
            <p id="location" className='text-sm mb-1 lg:mb-[6px]'>
                {location}
            </p>
            <h3 id="address" className='text-xl lg:text-2xl font-semibold mb-2 lg:mb-[10px] lg:text-nowrap'>
                {address}
            </h3>
            <p id="description" className='text-[#999999] text-sm lg:text-base'>
                {children}
            </p>
        </div>
        <div id="contact-details" className='flex gap-2 max-lg:flex-wrap text-sm '>
            <div id="mail" className='bg-[#1A1A1A] border border-[#262626] flex items-center px-4 py-[10px] rounded-[28px]'>
                <img src={iconMail} alt="mail icon" className='w-5 h-5' />
                <p>{mail}</p>
            </div>
            <div id="tel" className='bg-[#1A1A1A] border border-[#262626] flex items-center px-4 py-[10px] rounded-[28px]'>
                <img src={iconPhone} alt="telephone icon" className='w-5 h-5' />
                <p>{telephone}</p>
            </div>
            <div id="city" className='bg-[#1A1A1A] border border-[#262626] flex px-4 items-center py-[10px] rounded-[28px]'>
                <img src={iconLocation} alt="location icon" className='w-5 h-5' />
                <p>{city}</p>
            </div>
        </div>
        <button className='text-sm py-[14px] rounded-lg bg-[#703BF7]'>
            Get Direction
        </button>
    </div>
}