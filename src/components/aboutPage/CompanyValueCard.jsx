export default function CompanyValueCard({ valueIcon, heading, children, customClass }) {
    return <div className={`value-card pb-5 ${customClass}`}>
        <div className="flex items-center gap-2 mb-[14px] lg:mb-4">
            <div className="border p-[14px] rounded-full"><img src={valueIcon} alt="" /></div>
            <h3 className="text-lg font-semibold">{heading}</h3>
        </div>
        <p className="text-[#999999] text-sm">
            {children}
        </p>
    </div>
}