export default function TermsComponent() {
    return <div className="flex flex-wrap justify-between items-center gap-5">
        <div className="flex items-center gap-[6px]">
            <input type="checkbox" name="agreement" id="agreement" className="border w-6 h-6 rounded appearance-none bg-[#1A1A1A] checked:content-[url('./assets/check.svg')]" />
            <label htmlFor="agreement" className="text-sm lg:text-base text-[#999999]">I agree with <span className="underline">Terms of Use</span> and <span className="underline">Privacy Policy</span></label>
        </div>
        <button type="submit" className="max-md:w-full py-[14px] md:px-[34px] bg-[#703BF7] rounded-md">
            Send your Message
        </button>
    </div>
}