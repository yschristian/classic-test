import Navbar from "@/pages/Navbar"
import { useState, useEffect } from "react"
import { SelectedPage } from "@/shared/types"
import Home from "@/pages/Home"
import RoadSigns from "@/pages/RoadSigns"
import TrafficRules from "@/pages/TrafficRules"
import ContactUs from "@/pages/ContactUs"


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = async () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="App">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home
        setSelectedPage={setSelectedPage}
      />
      <RoadSigns
        setSelectedPage={setSelectedPage}
      />
      <TrafficRules
        setSelectedPage={setSelectedPage}
      />
      <ContactUs
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
