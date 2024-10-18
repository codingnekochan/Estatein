import iconEmailFill from '../../assets/Iconmail-fill.svg'
import iconPhone from '../../assets/Icontelephone.svg'
import SelectComponentStyle from '../sharedComponents/SelectComponentStyle'
function InputRadioComponent() {
    return <fieldset>
        <legend className="font-semibold text-base px-px">Preferred Contact Method</legend>
        <div className="flex max-md:flex-wrap gap-4 mt-[10px] lg:mt-[14px]">
            <div className='flex justify-between items-center bg-[#1A1A1A] border border-[#262626] w-full md:flex-shrink px-5 py-[13px] outline-none rounded-md '> 
                <label htmlFor="prefer-phone">
                    <div className="flex">
                        <img src={iconPhone} alt="" />
                        <input type="tel" name="phone" id="contact-phone" placeholder="Enter you Phone" className='bg-inherit outline-none ml-[6px] placeholder:text-[#666666]'/>
                    </div>
                </label>
                <input type="radio" name="preferred-contact" value="phone" id="prefer-phone" className='w-3 h-3 rounded-full border border-[#703BF7] appearance-none checked:bg-[#703BF7]' />
            </div>
            <div className='flex justify-between items-center bg-[#1A1A1A] border border-[#262626] w-full md:flex-shrink px-5 py-[13px] outline-none rounded-md '>
                <label htmlFor="prefer-email">
                    <div className="flex">
                        <img src={iconEmailFill} alt="" />
                        <input type="email" name="email" id="contact-email" placeholder="Enter you Email" className='bg-inherit outline-none ml-[6px] placeholder:text-[#666666]' />
                    </div>
                </label>
                <input type="radio" name="preferred-contact" value="email" id="prefer-email" className='w-3 h-3 rounded-full border border-[#703BF7] appearance-none checked:bg-[#703BF7]' />
            </div>
        </div>
    </fieldset>
}

function SelectAmountComponent({ id, label }) {
    return <SelectComponentStyle id={id} label={label}>
        <option value="">Select {label}</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
    </SelectComponentStyle>

}

function SelectBudgetComponent({ id, label }) {
    return <SelectComponentStyle id={id} label={label}>
        <option value="">Select Budget</option>
        <option value="100k-500k">$100,000-$500,000</option>
        <option value="501k-1M">$500,000-$1,000,000</option>
        <option value="$1M-$5M">$1,000,000-$5,000,000</option>
        <option value="above $5M">Above $5,000,000</option>
    </SelectComponentStyle>

}
function SelectLocationComponent({ id, label }) {
    return <SelectComponentStyle id={id} label={label}>
        <option value="">Select Location</option>
        <option value="Florida">Florida</option>
        <option value="Miami">Miami</option>
        <option value="California">California</option>
    </SelectComponentStyle>

}
function SelectPropertyTypeComponent({ id, label }) {
    return <SelectComponentStyle id={id} label={label}>
        <option value="">Select Property Type</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Townhouse">Townhouse</option>
    </SelectComponentStyle>
}

export { InputRadioComponent, SelectAmountComponent, SelectBudgetComponent, SelectLocationComponent, SelectPropertyTypeComponent }