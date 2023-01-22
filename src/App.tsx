import Navbar from "@/pages/Navbar"
import { useState } from "react"
import { SelectedPage } from "@/shared/types"
import Home from "./pages/Home"


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  return (
    <div className="App">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
