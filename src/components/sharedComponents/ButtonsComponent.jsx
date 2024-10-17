import dropdown from '../../assets/Icondropdown.svg'

export function FilterButton({ name, id, filterIcon }) {
    return <button id={`${id}-filter`} className='w-full bg-[#141414] flex justify-between items-center lg:gap-5 border border-[#262626] rounded-lg px-[14px] py-3'>
        <div className='flex items-center'>
            <div className='custom-right-border pr-2 before:h-full'>
                <img src={filterIcon} alt="filter icon" />
            </div>
            <span className='pl-2'>
                {name}
            </span>
        </div>
        <div className="drop-down">
            <img src={dropdown} alt="" />
        </div>
    </button>
}

export function LearnMoreButton({ link }) {
    return <button>
        <a href={link}>Learn More</a>
    </button>
}

export function PropertyDetailsButton({link}){
    return <button className='px-[20px] py-[14px] bg-[#703BF7] rounded-lg text-sm text-nowrap'>
        <a href={link}>View Property Details</a>
    </button>
}