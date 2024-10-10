
import { Outlet } from "react-router-dom"
import FooterComponent from "./components/sharedComponents/FooterComponent"
import NavigationComponent from "./components/sharedComponents/NavigationComponent"

function App() {
  return <>
    <NavigationComponent/>
    <Outlet/>  
    <FooterComponent />
  </>
}

export default App
