export function SelectInquiryComponent(){
    return <div>
        <label htmlFor="inquiry-type">Inquiry Type</label>
        <select name="inquiry-type" id="inquiry-type">
            <option value="">Select Inquiry Type</option>
            <option value="buying">Buying Property</option>
            <option value="selling">Selling Property</option>
            <option value="leasing/renting">Leasing/Renting Property</option>
        </select>
    </div>
}
export function SelectReferralComponent(){
    return <div>
        <label htmlFor="referral-type">How Did You Hear About Us?</label>
        <select name="referral-type" id="referral-type">
            <option value="">Select</option>
            <option value="relatives">Relatives</option>
            <option value="ads">Advertisement</option>
            <option value="socials">Social Media</option>
            <option value="google">Google</option>
        </select>
    </div>
}