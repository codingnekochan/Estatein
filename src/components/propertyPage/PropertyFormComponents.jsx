import iconEmailFill from '../../assets/Iconmail-fill.svg'
import iconPhone from '../../assets/Icontelephone.svg'
function InputRadioComponent() {
    return <fieldset>
        <legend>Preferred Contact Method</legend>
        <div>
            <label htmlFor="prefer-phone">
                <div className="flex">
                    <img src={iconPhone} alt="" />
                    <input type="tel" name="phone" id="contact-phone" placeholder="Enter you Phone" />
                </div>
            </label>
            <input type="radio" name="contact-phone" value="phone" id="prefer-phone" />
        </div>
        <div>
            <label htmlFor="prefer-email">
                <div className="flex">
                    <img src={iconEmailFill} alt="" />
                    <input type="email" name="email" id="contact-email" placeholder="Enter you Email" />
                </div>
            </label>
            <input type="radio" name="contact-email" value="email" id="prefer-email" />
        </div>
    </fieldset>}

function SelectAmountComponent({id,label}) {
    return <div>
        <label htmlFor={id}>{label}</label>
        <select name={id} id={id}>
            <option value="">Select {label}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
        </select>
    </div>
}

function SelectBudgetComponent(){
   return <div>
        <label htmlFor="budget">Budget</label>
        <select name="budget" id="budget">
            <option value="">Select Budget</option>
            <option value="100k-500k">$100,000-$500,000</option>
            <option value="501k-1M">$500,000-$1,000,000</option>
            <option value="$1M-$5M">$1,000,000-$5,000,000</option>
            <option value="above $5M">Above $5,000,000</option>
        </select>
    </div>
}
function SelectLocationComponent() {
    return <div>
        <label htmlFor="location">Preferred Location</label>
        <select name="location" id="location">
            <option value="">Select Location</option>
            <option value="Florida">Florida</option>
            <option value="Miami">Miami</option>
            <option value="California">California</option>
        </select>
    </div>
}
function SelectPropertyTypeComponent() {
    return <div>
        <label htmlFor="property-type">Property Type</label>
        <select name="property-type" id="property-type">
            <option value="">Select Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Townhouse">Townhouse</option>
        </select>
    </div>
}

export {InputRadioComponent,SelectAmountComponent,SelectBudgetComponent,SelectLocationComponent,SelectPropertyTypeComponent}