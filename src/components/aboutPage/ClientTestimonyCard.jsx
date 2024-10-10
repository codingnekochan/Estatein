export default function ClientTestimonyCard({ year, companyName, companyDomain, companyCategory, children }) {
    return <div className='client-card border flex-shrink-0 lg:flex-shrink w-full p-6'>
        <div>
            <div>
                <p>Since {year}</p>
                <h3>{companyName}</h3>
            </div>
            <a href='#'>
                Visit Website
            </a>
        </div>
        <div>
            <div>
                <div>
                    <img src="" alt="" />
                    <h4>Domain</h4>
                </div>
                <p>{companyDomain}</p>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <h4>Category</h4>
                </div>
                <p>{companyCategory}</p>
            </div>
        </div>
        <div>
            <h4>What They Said 🤗</h4>
            <p>
                {children}
            </p>

        </div>
    </div>

}