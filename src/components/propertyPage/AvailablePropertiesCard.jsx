export function AvailablePropertiesCard({ motto,propertyName,propertyImage, children,price,readMoreLink}) {
    return <div>
        <div className="property-img">
            <img src={propertyImage} alt="" />
        </div>
        <div className="motto">
            <p>
                {motto}
            </p>
        </div>
        <div className="property-info">
            <h3>{propertyName}</h3>
            <p>
                {children}
            <a href={readMoreLink}>Read More</a>
            </p>
        </div>
        <div className="property-price">
            <div>
                <span>Price</span>
                <br/>
                <span>{price}</span>
            </div>
            <button>
                <a href={readMoreLink}>View Property Details</a>
            </button>
        </div>
    </div>

}