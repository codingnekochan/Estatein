import SelectComponentStyle from "../sharedComponents/SelectComponentStyle"
export function SelectInquiryComponent({ id, label }) {
    return <SelectComponentStyle id={id} label={label}>
        <option value="">Select Inquiry Type</option>
        <option value="buying">Buying Property</option>
        <option value="selling">Selling Property</option>
        <option value="leasing/renting">Leasing/Renting Property</option>
    </SelectComponentStyle>
}
export function SelectReferralComponent({ id, label }) {
    return <SelectComponentStyle id={id} label={label}>
        <option value="">Select</option>
        <option value="relatives">Relatives</option>
        <option value="ads">Advertisement</option>
        <option value="socials">Social Media</option>
        <option value="google">Google</option>
    </SelectComponentStyle>
}