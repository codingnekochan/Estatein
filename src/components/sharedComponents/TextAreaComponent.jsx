export default function TextAreaComponent({id,label,placeholder}){
    return <div>
        <label htmlFor={id} className="font-semibold text-base px-px">{label}</label>
        <br />
        <textarea name={id} id={id} className="border border-[#262626] rounded-md w-full bg-[#1A1A1A] mt-[10px] lg:mt-[14px] px-5 py-4 placeholder:text-[#666666] h-[90px] md:h-[122px]" placeholder={placeholder}></textarea>
    </div>
}