import categoryIcon from '../../assets/category.svg'
import domainIcon from '../../assets/domain.svg'
export default function ClientTestimonyCard({ year, companyName, companyDomain, companyCategory, children }) {
    return <div className='client-card border border-[#262626] rounded-lg shadow-[0_0_0_6px_rgba(25,25,25,1)] flex-shrink-0 lg:flex-shrink w-full p-6 lg:p-10'>
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-[30px]">
            <div>
                <p className="font-medium text-sm lg:text-base text-[#999999]">Since {year}</p>
                <h3 className="font-semibold text-xl lg:text-2xl">{companyName}</h3>
            </div>
            <div className="text-center text-sm py-[14px] md:px-5 bg-[#1A1A1A] border border-[#262626] rounded-lg">
                <a href='#'>
                    Visit Website
                </a>
            </div>
        </div>
        <div className="flex mb-[30px] p-px">
            <div className="pr-4 lg:pr-5 custom-right-border w-full before:h-full">
                <div className='flex text-[#999999] text-xs lg:text-sm  items-center mb-1'>
                    <img src={domainIcon} alt="" />
                    <h4>Domain</h4>
                </div>
                <p className='text-sm lg:text-base'>
                    {companyDomain}
                </p>
            </div>
            <div className="pl-4 lg:pl-5 w-full">
                <div className='flex text-[#999999] text-xs lg:text-sm  items-center mb-1'>
                    <img src={categoryIcon} alt="" />
                    <h4>Category</h4>
                </div>
                <p className='text-sm lg:text-base'>
                    {companyCategory}
                </p>
            </div>
        </div>
        <div className='border border-[#262626] rounded-lg p-5'>
            <h4 className='text-sm lg:text-base text-[#999999] mb-2 font-medium'>What They Said 🤗</h4>
            <p className='text-sm  lg:text-base font-medium'>
                {children}
            </p>

        </div>
    </div>

}