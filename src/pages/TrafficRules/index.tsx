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
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, fugiat quo! Maiores possimus perferendis quasi pariatur sed ipsum, voluptate repellendus laudantium nesciunt magnam cupiditate ut enim sunt beatae vitae omnis officia atque quo, exercitationem error delectus corporis blanditiis ad voluptates. Doloribus maxime labore incidunt veniam repudiandae, necessitatibus consectetur itaque asperiores, reiciendis provident aliquam mollitia rerum natus tenetur temporibus consequuntur id veritatis aspernatur eos recusandae, in minus? Quisquam nesciunt eveniet esse sunt aut praesentium,"
  },
  {
    id:2,
    title: "Igice cya 2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, fugiat quo! Maiores possimus perferendis quasi pariatur sed ipsum, voluptate repellendus laudantium nesciunt magnam cupiditate ut enim sunt beatae vitae omnis officia atque quo, exercitationem error delectus corporis blanditiis ad voluptates. Doloribus maxime labore incidunt veniam repudiandae, necessitatibus consectetur itaque asperiores, reiciendis provident aliquam mollitia rerum natus tenetur temporibus consequuntur id veritatis aspernatur eos recusandae, in minus? Quisquam nesciunt eveniet esse sunt aut praesentium,"
  },
  { 
    id:3,
    title: "Igice cya 3",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, fugiat quo! Maiores possimus perferendis quasi pariatur sed ipsum, voluptate repellendus laudantium nesciunt magnam cupiditate ut enim sunt beatae vitae omnis officia atque quo, exercitationem error delectus corporis blanditiis ad voluptates. Doloribus maxime labore incidunt veniam repudiandae, necessitatibus consectetur itaque asperiores, reiciendis provident aliquam mollitia rerum natus tenetur temporibus consequuntur id veritatis aspernatur eos recusandae, in minus? Quisquam nesciunt eveniet esse sunt aut praesentium,"
  },
  {
    id:4,
    title: "Igice cya 4",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, fugiat quo! Maiores possimus perferendis quasi pariatur sed ipsum, voluptate repellendus laudantium nesciunt magnam cupiditate ut enim sunt beatae vitae omnis officia atque quo, exercitationem error delectus corporis blanditiis ad voluptates. Doloribus maxime labore incidunt veniam repudiandae, necessitatibus consectetur itaque asperiores, reiciendis provident aliquam mollitia rerum natus tenetur temporibus consequuntur id veritatis aspernatur eos recusandae, in minus? Quisquam nesciunt eveniet esse sunt aut praesentium,"
  },
  {
    id:5,
    title: "igice cya 5",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, fugiat quo! Maiores possimus perferendis quasi pariatur sed ipsum, voluptate repellendus laudantium nesciunt magnam cupiditate ut enim sunt beatae vitae omnis officia atque quo, exercitationem error delectus corporis blanditiis ad voluptates. Doloribus maxime labore incidunt veniam repudiandae, necessitatibus consectetur itaque asperiores, reiciendis provident aliquam mollitia rerum natus tenetur temporibus consequuntur id veritatis aspernatur eos recusandae, in minus? Quisquam nesciunt eveniet esse sunt aut praesentium,"
  },
  {
    id:6,
    title: "igice cya 6",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, fugiat quo! Maiores possimus perferendis quasi pariatur sed ipsum, voluptate repellendus laudantium nesciunt magnam cupiditate ut enim sunt beatae vitae omnis officia atque quo, exercitationem error delectus corporis blanditiis ad voluptates. Doloribus maxime labore incidunt veniam repudiandae, necessitatibus consectetur itaque asperiores, reiciendis provident aliquam mollitia rerum natus tenetur temporibus consequuntur id veritatis aspernatur eos recusandae, in minus? Quisquam nesciunt eveniet esse sunt aut praesentium,"
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
                description={item.description}
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