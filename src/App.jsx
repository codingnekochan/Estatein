
import { Outlet } from "react-router-dom"
import FooterComponent from "./components/sharedComponents/FooterComponent"
import NavigationComponent from "./components/sharedComponents/NavigationComponent"
import CtaComponent from './components/sharedComponents/CtaComponent'

function App() {
  return <>
    <NavigationComponent/>
    <Outlet/> 
    <CtaComponent/>
    <FooterComponent />
  </>
}

export default App
