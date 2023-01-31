import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types'
import { useForm } from 'react-hook-form'
import car2 from "@/assets/car2.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }
  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
      <div className="md:w-3/5 ">
        <HText>JOIN NOW TO GET KNOWLDGE</HText>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur quis nulla ullam, ipsum sapiente iste iure aut dolorum ut ab nobis sunt inventore laboriosam ipsam sint, voluptate eius. Ex.
        </p>
      </div>
      <div className='mt-10 justify-between gap-8 md:flex'>
        <div className='mt-10 basis-3/5 md:mt-0'>
          <form
            target="_blank"
            method='POST'
            onSubmit={onSubmit}
            action="https://formsubmit.co/a7ca2c6b1d44d69214aa63c189e96ef5"
          >
            <input
              className={`${inputStyles}`}
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {
                  errors.name.type === "required" && "this field is required"
                }
                {
                  errors.name.type === "maxLength" && "MaxLength is 100 character"
                }
              </p>
            )}

            <input
              className={`${inputStyles}`}
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {
                  errors.email.type === "required" && "this field is required"
                }
                {
                  errors.email.type === "pattern" && "Invalid Email Address"
                }
              </p>
            )}
            <textarea
              className={`${inputStyles}`}
              rows={4}
              cols={50}
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000
              })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {
                  errors.message.type === "required" && "this field is required"
                }
                {
                  errors.message.type === "maxLength" && "MaxLength is 2000 character"
                }
              </p>
            )}
            <button
              type="submit"
              className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="relative mt-16 basis-2/5 md:mt-0">
            <div className='w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
              <img src={car2} className="w-full"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs