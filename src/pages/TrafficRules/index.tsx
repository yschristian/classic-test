import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types'
import roadsignn2 from "@/assets/roadsignn2.png"
import roadsigns1 from "@/assets/roadsigns1.png"
import { RoadType } from '@/shared/types'
import TrafficRoad from './TrafficRoad'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
const Traffic: Array<RoadType> = [
  {
    id:1,
    title: "Igice cya 1",
    img: roadsignn2
  },
  {
    id:2,
    title: "Igice cya 2",
    img: roadsignn2
  },
  { 
    id:3,
    title: "Igice cya 3",
    img: roadsignn2
  },
  {
    id:4,
    title: "Igice cya 4",
    img: roadsignn2
  },
  {
    id:5,
    title: "igice cya 5",
    img: roadsignn2
  },
  {
    id:6,
    title: "igice cya 6",
    img: roadsignn2
  }
]
const TrafficRules = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="trafficrules"
      className="mx-auto min-h-full w-5/6 py-20 bg"
    >
      <div>
        <div className='md:my-5 md:w-3/5'>
          <HText>Traffic Rules.</HText>
          <p className='my-10 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, et corporis similique aliquid quaerat magni eius? Aut ea, placeat assumenda consectetur quo quis cum, quae facilis recusandae sint perferendis quam.
          </p>
        </div>
        <div className='md:flex mt-5 items-center gap-8 flex-wrap'>
          {
            Traffic.map((item: RoadType) => (
              <TrafficRoad
                key={item.id}
                title={item.title}
                img={item.img}
                setSelectedPage={setSelectedPage}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default TrafficRules