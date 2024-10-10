export default function AchievementsCard({ heading, children }) {
    return <div className="lg:w-full achievement border border-[#262626] rounded-lg p-[30px] lg:p-10 shadow-[0_0_0_4px_rgba(25,25,25,1)] shrink-0 lg:shrink">
        <h3 className="font-semibold text-xl lg:text-2xl mb-4 lg:mb-6">
            {heading}
        </h3>
        <p className="text-sm lg:text-base">
            {children}
        </p>
    </div>
}