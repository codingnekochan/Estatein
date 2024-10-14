export default function StepsCard({ step, heading, children }) {
    return <div className='step h-full lg:p-[2px] '>
        <h3 className="text-base border-l border-[#703BF7] py-[14px] lg:py-4 px-4 lg:px-5">
            Step {step}
        </h3>
        <div className="gradient-border p-px 2xl:p-[2px] rounded-r-lg rounded-bl-lg">
            <div className="step-content p-[30px] lg:p-10 min-h-[185px] lg:h-[225px] lg:max-h-[250px] rounded-r-lg rounded-bl-lg">
                <h4 className="font-semibold text-lg lg:text-xl mb-[14px] lg:mb-4">{heading}</h4>
                <p className="text-sm lg:text-base text-[#999999]">
                    {children}
                </p>
            </div>
        </div>
    </div>
}