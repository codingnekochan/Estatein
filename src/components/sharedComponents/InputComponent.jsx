export default function InputComponent({ id, type, label, placeholder }) {
    return <div>
        <label htmlFor={id} className="font-semibold text-base px-px">{label}</label>
        <br />
        <input type={type} id={id} name={id} placeholder={placeholder} className="w-full bg-[#1A1A1A] placeholder:text-sm placeholder:text-[#666666] px-5 py-[13px] border border-[#262626] rounded-md outline-none focus:outline-1 focus:outline-[#8f8d8d] mt-[10px] lg:mt-[14px] "/>
    </div>

}

