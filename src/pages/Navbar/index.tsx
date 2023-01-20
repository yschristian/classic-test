import Logo from "@/assets/Logo.png"
import { SelectedPage } from "@/shared/types"
import Link from "./Link"

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({
    selectedPage,
    setSelectedPage
}: Props) => {
    const flexBetween = "flex items-center justify-between"

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16 `}>
                        <img src={Logo} alt="logo" />
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Test" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Road Signs" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Traffic Rules" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                            <div>
                                <button>Become a member</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar