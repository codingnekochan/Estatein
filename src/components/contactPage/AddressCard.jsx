import iconMail from '../../assets/Iconmail-fill.svg'
import iconPhone from '../../assets/Icontelephone.svg'
import iconLocation from '../../assets/Iconlocation.svg'
export default function AddressCard({location,address,children,mail,telephone,city}){
    return <div>
        <p id="location">
            {location}
        </p>
        <h3 id="address">  
            {address}      
        </h3>
        <p id="description">
            {children}
        </p>
        <div id="contact-details">
            <div id="mail">
                <img src={iconMail} alt="" />
                <p>{mail}</p>
            </div>
            <div id="tel">
                <img src={iconPhone} alt="" />
                <p>{telephone}</p>
            </div>
            <div id="city">
                <img src={iconLocation} alt="" />
                <p>{city}</p>
            </div>
        </div>
        <button>
            Get Direction
        </button>
    </div>
}