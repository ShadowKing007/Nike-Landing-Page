import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border lg:dark:bg-black sm:dark:bg-black  sm:border-black  dark:border-white rounded-full  dark:text-white">
        <input type="text"
          placeholder="shariffibrahim528@gmail.com"
          className="input border dark:bg-black"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full ">
          <Button label="Sign up" fullwidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe