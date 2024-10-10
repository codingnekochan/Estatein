import dropdown from '../../assets/Icondropdown.svg'

export function FilterButton({name, id ,filterIcon}) {
    return <button id={`${id}-filter`} className='bg-blue-400'>
        <div>
            <div>
                <img src={filterIcon} alt="" />
            </div>
            <p>
                {name}
            </p>
        </div>
        <div className="drop-down">
            <img src={dropdown} alt="" />
        </div>
    </button>
}

export function LearnMoreButton({link}){
    return <button>
        <a href={link}>Learn More</a>
    </button>
}