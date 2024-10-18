export default function SelectComponentStyle({ children, id, label }) {
    return <div>
        <label htmlFor={id} className="font-semibold text-base px-px">{label}</label>
        <br />
        <div className='relative mt-[10px] lg:mt-[14px]  bg-[#1A1A1A] border border-[#262626] w-full px-5 py-[13px] text-[#666666] outline-none rounded-md after:absolute after:right-5 after:content-[url("./assets/Icondropdown.svg")] after:h-full after:w-5'>
            <select name={id} id={id} className='bg-inherit w-full outline-none appearance-none'>
                {children}
            </select>
        </div>


    </div>
}