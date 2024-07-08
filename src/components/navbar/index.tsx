import Logo from "@/app/components/logo";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import Navlinks from "./navlinks";
import Menu from "./menu";
import { User } from "@prisma/client";
import { SafeUser } from "@/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log({currentUser});
  
  return (
    <Section className="border-b shadow-sm dark:border-gray-700 fixed top-0 z-10 bg-white dark:bg-neutral-950">
      <Container className="py-3 flex justify-center md:justify-between items-center">
        <Logo />
        <div className="flex items-center gap-5">
          <Navlinks />
          <Menu currentUser={currentUser}/>
        </div>
      </Container>
    </Section>
  )
}

export default Navbar;