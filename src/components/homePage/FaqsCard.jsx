
export default function FaqsCard({children}){
    return <div id='faqs-card' className='lg:min-h-[282px] border border-[#262626] flex-shrink-0 lg:flex-shrink p-[30px] lg:p-10 w-full md:w-[48%] rounded-xl flex flex-col justify-between items-start'>
        <div>
            {children}
        </div>
        <button className="w-full px-5 py-[14px] lg:w-auto border border-[#262626] bg-[#1A1A1A] rounded-lg mt-5 lg:mt-6">
            Read More
        </button>
    </div>
}