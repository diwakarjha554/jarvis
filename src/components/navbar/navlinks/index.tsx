import ActiveLink from "@/app/components/ui/ActiveLink";

const Navlinks = () => {
  return (
    <div
      className={`gap-5 items-center hidden md:flex font-[500]`}
    >
      <ActiveLink exact href='/' text='Home' />
      <ActiveLink exact href='/about-us' text='About' />
      <ActiveLink exact href='/contact-us' text='Contact' />
      <ActiveLink exact href='/payments' text='Payments' />
    </div>
  )
}

export default Navlinks;