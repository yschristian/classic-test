import React from 'react'
import roadsignn2 from "@/assets/roadsignn2.png"
import roadsigns1 from "@/assets/roadsigns1.png"
import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    title: string,
    img: string,
    setSelectedPage:(value:SelectedPage)=>void
}

const TrafficRoad = ({setSelectedPage, title, img }: Props) => {
    return (
        <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-6 text-center h-[380px] w-[450px]'>
            <h4 className="font-bold">{title}</h4>
            <div className="mb-4 flex justify-center">
                <div className=" p-4">
                <img alt={`${img}`} src={img}/>
                </div>
            </div>
            <AnchorLink
                className="txt-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
            >
                <p>Learn More</p>
            </AnchorLink>
        </div>
    )
}

export default TrafficRoad