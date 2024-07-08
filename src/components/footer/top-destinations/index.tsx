import ActiveLink from '@/app/components/ui/ActiveLink';
import { MdKeyboardArrowRight } from "react-icons/md";

const TopDestinations = () => {
    return (
        <div className={`max-w-[410px]`}>
            <div className={``}>
                <span className={`text-xl font-[500]`}>Top Destinations</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="#" exact classes={``} text="Rishikesh" />
                </div>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="#" exact classes={``} text="Haridwar" />
                </div>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="#" exact classes={``} text="Dehradun" />
                </div>
                <div className="flex items-center gap-1">
                    <MdKeyboardArrowRight />
                    <ActiveLink href="#" exact classes={``} text="Mussoorie" />
                </div>
            </div>
        </div>
    )
}

export default TopDestinations;