
export default function CtaComponent() {
    return <section className="cta-component border-y border-[#262626] bg-[url('./assets/CTA.png')] lg:bg-[url('./assets/CTA-desktop.png')] bg-no-repeat lg:flex lg:gap-36 lg:justify-between lg:items-center px-4 xl:px-20 py-[50px] xl:py-[60px]">
        <div>
            <h2 className="text-[28px] lg:text-[38px] font-semibold">
                Start Your Real Estate Journey Today
            </h2>
            <p className="text-sm text-base text-[#999999] mb-[30px] lg:mb-0">
                Your dream property is just a click away.
                Whether you&apos;re looking for a new home, a strategic investment,
                or expert real estate advice, Estatein is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
            </p>
        </div>
        <div>
            <button className="w-full py-[14px] bg-[#703BF7] rounded-lg text-nowrap lg:px-5">
                Explore Properties
            </button>
        </div>
    </section>
}