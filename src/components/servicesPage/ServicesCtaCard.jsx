
export function ServicesCtaCard({heading,children}){
    return <div>
        <div>
            <h3>{heading}</h3>           
            {children}
        </div>
    </div>
}

export function ServicesCtaDetails({children}){
    return <p>{children}</p>
}