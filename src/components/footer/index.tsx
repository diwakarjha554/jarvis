import Logo from "@/app/components/logo";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import SocialIcons from "./social-icons";
import Link from "next/link";
import QuickLinks from "./quick-links";
import TopDestinations from "./top-destinations";
import Legal from "./legal";
import GetInTouch from "./get-in-touch";

const Footer = () => {
  return (
    <Section className="border-t dark:border-gray-700 mt-5">
      <Container className="w-full flex flex-col items-center">
        <div className="w-full mt-10 flex flex-col gap-5 sm:flex-row items-center sm:justify-between pb-5 border-b dark:border-gray-700">
          <Logo />
          <SocialIcons />
        </div>

        <div className={`w-[95%] flex justify-between pt-10 pb-5 flex-wrap gap-10`}>
          <QuickLinks />
          <TopDestinations />
          <Legal />
          <GetInTouch />
        </div>
        
        <div className={`pt-5 w-full flex justify-between md:pb-5 mb-5 md:mb-0 flex-col text-center lg:flex-row items-center gap-2 border-t dark:border-gray-700`}>
          <span className={``}>Copyright © 2024 <Link href="/" className={`hover:underline`}>Travel Trail Holidays</Link>. All Rights Reserved.</span>
          <span className={``}>
            <span>Designed with <span className={`text-[#FF5956] text-lg select-none`}>&#x2665;</span> by <Link href="/" target="_blank" className={`text-[#FF5956] hover:underline`}>Diwakar Jha</Link>.</span>
          </span>
        </div>
      </Container>
    </Section>
  )
}

export default Footer;