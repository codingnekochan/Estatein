
export function ServicesCtaCard({ heading, children }) {
    return <div className="grid lg:grid-cols-5 gap-5 justify-center">
        <h3 className="font-bold text-xl lg:text-2xl md:text-center lg:text-left  col-span-full md:col-span-4 md:self-center">{heading}</h3>
        {children}
    </div>
}

export function ServicesCtaDetails({ children }) {
    return <p className="col-span-full text-[#999999] text-sm lg:text-base">{children}</p>
}