import StarsDesign from "./StarsDesign"
export function SectionHeader({ heading, children}) {
    return <div>
        <StarsDesign />
        <div className="px-[6px] lg:px-[10px] w-[97%] lg:w-full">
            <h2 className="font-bold text-[28px] xl:text-[38px] capitalize lg:mt-[3px] lg:mb-[10px]" >
                {heading}
            </h2>
            <p className="text-sm lg:text-base text-[#999999] mb-10 lg:mb-[60px] p-px">
                {children}
            </p>
        </div>
    </div>
}