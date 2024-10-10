import { Link } from 'react-router-dom'
import cancelButton from '../../assets/Buttonremove-banner.svg'
import closeMenu from '../../assets/menu-close.svg'
import companyLogo from '../../assets/Logohome-logo.svg'
import hamburgerMenu from '../../assets/hamburger-icon.svg'
import RouteLink from './RouteLink'
import { useState } from 'react'
export default function NavigationComponent() {
    const [isOpen, setIsOpen] = useState(false)
    const [isDisplayed,setIsDisplayed] = useState(true)
    function handleIsOpen() {
        if (isOpen === true) {
            setIsOpen(false)
        }
        else {
            setIsOpen(true)
        }
    }
    return <header id='header' className=' bg-[#1A1A1A] text-white'>
      { isDisplayed && <section id="banner" className="banner bg-[url('./assets/banner-mobile.svg')] bg-no-repeat bg-cover flex justify-between items-center pt-10 pb-5 px-4  lg:bg-[url('./assets/banner.svg')] lg:py-[14px] lg:justify-center border-b border-[#262626] ">
            <div className='flex gap-2 text-xs lg:text-sm xl:text-xl'>
                <p className=''>
                    ✨Discover Your Dream Property with Estatein
                </p>
                <a href="#" className="underline decoration-gray-500">Learn More</a>
            </div>
            <button id="close-banner" className='w-6 h-6 bg-[#1A1A1A] rounded-full lg:relative right-[-27%]' onClick={()=> setIsDisplayed(false)}>
                <img src={cancelButton} alt='remove banner' />
            </button>
        </section>
        }
        <nav id="navigation" className="h-full relative flex justify-between px-4 py-5 lg:px-20 lg:py-4 border-b border-[#262626] items-center">
            <div>
                <img src={companyLogo} alt="company logo" />
            </div>
            <div className={`z-20 bg-[#141414] lg:bg-[#1A1A1AF4] pt-10 lg:pt-0 h-[100vh] lg:h-full w-full lg:w-[67%] lg:block absolute lg:static top-0 left-0 fl/ex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
                <ul className=' flex flex-col lg:flex-row items-center lg:justify-between gap-6'>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
                        <RouteLink link={'/'} linkName={'Home'} isOpen = {()=>setIsOpen(false)} />
                        <RouteLink link={'about'} linkName={'About Us'} isOpen={() => setIsOpen(false)} />
                        <RouteLink link={'properties'} linkName={'Properties'} isOpen={() => setIsOpen(false)} />
                        <RouteLink link={'services'} linkName={'Services'} isOpen={() => setIsOpen(false)} />
                    </div>
                    <div className='lg:bg-[#141414] lg:border lg:border-[#262626] lg:rounded-lg'>
                        <li className='px-5 py-3' onClick={()=>setIsOpen(false)}>
                            <Link to={'contact'}>Contact Us</Link>
                        </li>
                    </div>
                </ul>
            </div>
            <button className="hamburger-menu lg:hidden z-20" onClick={handleIsOpen}>
               {isOpen === false ? <img src={hamburgerMenu} alt="open Menu" />
               : <img src={closeMenu} alt='close Menu'/>}
            </button>
        </nav>
    </header>
}