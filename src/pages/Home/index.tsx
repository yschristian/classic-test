import React from 'react'
import homepagelogo from "@/assets/homepagelogo.png"
import { SelectedPage } from '@/shared/types'
import car from "@/assets/car.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className="gap-16 py-10 md:h-full md:pb-0"

    >
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                <img src={homepagelogo} alt="home-page-log" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius maiores quas rem voluptatem? Consequuntur perferendis tempora sint assumenda esse, molestias ea beatae repellendus aut quasi, illum corporis doloremque cum eaque, sed odio fugiat fuga quas hic nemo! Officiis consequuntur delectus odit sit animi omnis expedita ipsa cumque veritatis iure, eaque voluptas totam corporis eum, quos provident atque eius eos quibusdam autem nisi necessitatibus. Cupiditate nesciunt quibusdam, ipsum nam vero dignissimos minima suscipit qui debitis tempora minus ducimus, est ratione.
            </p>
          </motion.div>
          <motion.div
            className="flex mt-8 items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <AnchorLink
              className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
              onClick={() => setSelectedPage(SelectedPage.Test)}
              href={`#${SelectedPage.Test}`}
            >
              <p>Test Now</p>
            </AnchorLink>
            <AnchorLink
              className="txt-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.TrafficRules)}
              href={`#${SelectedPage.TrafficRules}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={car} alt="car" />
        </div>
      </motion.div>
    </section>
  )
}

export default Home