import { SectionHeader } from "../sharedComponents/SectionHeader";
export function HomeSectionHeader({ children, heading, buttonName }) {
    return <div className="flex items-center justify-between">
        <SectionHeader heading={heading}>
            {children}
        </SectionHeader>
        <button className="absolute bottom-0 lg:static px-5 py-[14px] bg-[#1A1A1A] rounded-lg border border-[#262626] text-nowrap">
            {buttonName}
        </button>
    </div>
}