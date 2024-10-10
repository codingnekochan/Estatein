export default function StatsCard() {
    return <div className='stats-cards flex flex-wrap gap-3 lg:gap-4 justify-center items-center'>
        <div className='customer-stats-card p-4 flex-grow border border-[#262626] rounded-lg bg-[#1A1A1A]'>
            <p className="text-[#999999] text-center xl:text-left text-sm lg:text-base">
                <span className='stats-figure font-bold text-2xl lg:text-3xl text-white'>200+</span>
                <br />
                Happy Customers
            </p>
        </div>
        <div className='properties-stats-card p-4 border flex-grow border-[#262626] rounded-lg bg-[#1A1A1A]'>
            <p className="text-[#999999] text-center xl:text-left text-sm lg:text-base">
                <span className='stats-figure font-bold text-2xl lg:text-3xl text-white'>10K+</span>
                <br />
                Properties For Clients
            </p>
        </div>
        <div className='experience-stats-card p-4 border flex-grow border-[#262626] rounded-lg bg-[#1A1A1A]'>
            <p className="text-[#999999] text-center xl:text-left text-sm lg:text-base">
                <span className='stats-figure font-bold text-2xl lg:text-3xl text-white'>16+</span>
                <br />
                Years of Experience
            </p>
        </div>
    </div>
}