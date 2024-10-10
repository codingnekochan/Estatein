import rating from '../../assets/Containerrating-stars.svg'
import PropTypes from 'prop-types'

export default function ReviewCard({ userName, userLocation, profilePic, children }) {
    return <div id='review-card' className='h-[305px] md:h-80 lg:h-full lg:min-h-[363px] border border-[#262626] flex-shrink-0 lg:flex-shrink p-[30px] lg:p-10 w-full md:w-[48%] rounded-xl flex flex-col justify-between'>
        <div id='rating' className='mb-6 lg:mb-[30px]'>
            <img src={rating} alt="" />
        </div>
        {children}
        <div className='reviewer flex gap-[10px] items-center'>
            <div>
                <img src={profilePic} alt="" />
            </div>
            <div>
                <p className='userName text-base  lg:text-lg font-semibold'>{userName}</p>
                <p className='userLocation text-sm lg:text-base text-[#999999]'>{userLocation}</p>
            </div>
        </div>
    </div>
}
ReviewCard.propTypes = {
    userName: PropTypes.string,
    userLocation: PropTypes.string,
    profilePic: PropTypes.any,
    children: PropTypes.any
}