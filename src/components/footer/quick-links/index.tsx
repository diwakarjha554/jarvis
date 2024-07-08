import ActiveLink from '@/app/components/ui/ActiveLink';
import { MdKeyboardArrowRight } from "react-icons/md";

const QuickLinks = () => {
    return (
        <div className={`max-w-[410px]`}>
            <div className={``}>
                <span className={`text-xl font-[500]`}>Quick Links</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="/" exact classes={``} text="Home" />
                </div>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="/about" exact classes={``} text="About" />
                </div>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="/contact" exact classes={``} text="Contact" />
                </div>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="/payments" exact classes={``} text="Payments" />
                </div>
            </div>
        </div>
    )
}

export default QuickLinks;