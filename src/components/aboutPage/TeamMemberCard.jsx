import iconSend from '../../assets/Iconsend.svg'
import contactButton from '../../assets/contact-team.svg'

export default function TeamMemberCard({ teamMemberPic, teamMemberName, teamMemberRole }) {
    return <div className='team-member border border-[#262626] rounded-xl p-4 lg:p-6 lg:w-[24%]'>
        <div className='relative'>
            <img src={teamMemberPic} alt="" />
            <img src={contactButton} className='absolute top-[90%] left-[40%] w-[60px]' alt="" />
        </div>
        <h3 className='mt-10 lg:mt-[50px] font-semibold text-lg lg:text-xl text-center'>
            {teamMemberName}
        </h3>

        <p className='text-center text-[#999999] text-sm lg:text-base mb-4 lg:mb-5'>{teamMemberRole}</p>
        <div className='flex p-2 pl-6 justify-between items-center rounded-[100px] bg-[#1A1A1A] border border-[#262626]'>
            <span className='text'>
                Say Hello 👋
            </span>
            <div className='border p-[14px] rounded-full bg-[#703BF7]'>
                <img src={iconSend} alt="" />
            </div>
        </div>
    </div>
}