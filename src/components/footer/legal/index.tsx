import ActiveLink from '@/app/components/ui/ActiveLink';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";

const Legal = () => {
    return (
        <div className={`max-w-[410px]`}>
            <div className={``}>
                <span className={`text-xl font-[500]`}>Legal</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="/legal/privacy-policy" exact classes={``} text="Privacy Policy" />
                </div>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="/legal/terms-condition" exact classes={``} text="Terms & Condition" />
                </div>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="/legal/refund-cancellation-policy" exact classes={``} text="Refund & Cancellation Policy" />
                </div>
            </div>
        </div>
    )
}

export default Legal;