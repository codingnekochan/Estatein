// import { Children } from 'react'
import PropTypes from 'prop-types'
import iconArrowUp from '../../assets/Icon-arrow-up.svg'
export function LinksCard({ cardIcon, children, link }) {
    return <button className='relative border border-[#262626] bg-[#1A1A1A] font-semibold text-sm lg:text-base px-[14px] lg:px-4 py-5 lg:py-[30px] rounded-[10px]'>
        <a href={link}>
            <div className='info text-center flex flex-col justify-center items-center gap-[14px]'>
                <div className='w-12 '><img src={cardIcon} alt="" /></div>
                <span>{children}</span>
            </div>
            <div className='icon absolute top-5 right-5'>
                <img src={iconArrowUp} alt="" />
            </div>
        </a>
    </button>
}
LinksCard.propTypes = {
    cardIcon: PropTypes.any,
    children: PropTypes.any
}