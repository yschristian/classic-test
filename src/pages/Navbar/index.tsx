import Logo from "@/assets/Logo.png"
import { SelectedPage } from "@/shared/types"
import Link from "./Link"
import ActionButton from "@/shared/ActionButton"
import useMediaQuery from "@/hooks/useMediaQuery"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({
    selectedPage,
    setSelectedPage
}: Props) => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16 `}>
                        <img src={Logo} alt="logo" />
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link page="Home"selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="Traffic Rules " selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="Road Signs" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="Test" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                </div>
                                <div>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button className="rounded-md bg-secondary-500 p-2  hover:bg-primary-500"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </button>
                    </div>
                    <div className={`ml-[33%] gap-10 flex text-xl flex-col`}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Test" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Road Signs" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Traffic Rules" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar