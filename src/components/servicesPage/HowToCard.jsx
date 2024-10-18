export function HowToCard({icon,children,heading}){
    return <div className="border border-[#262626] bg-[#141414] rounded-[10px] p-6 lg:p-10">
        <div className="flex items-center gap-[10px] mb-4 lg:mb-5">
            <img src={icon} alt="card icon" className="w-12 lg:w-[60px] h-12 lg:h-[60px]" />
            <h3 className="font-semibold text-lg lg:text-xl">{heading}</h3>
        </div>
        <p className="text-[#999999] text-sm lg:text-base">
            {children}
        </p>
    </div>
}