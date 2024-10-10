export function HowToCard({icon,children,heading}){
    return <div>
        <div>
            <img src={icon} alt="" />
            <h3>{heading}</h3>
        </div>
        <p>
            {children}
        </p>
    </div>
}