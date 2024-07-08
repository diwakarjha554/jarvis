import ActiveLink from "@/app/components/ui/ActiveLink";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const GetInTouch = () => {
    return (
        <div className={`max-w-[410px]`}>
            <div className={``}>
                <span className={`text-xl font-[500]`}>GET IN TOUCH</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
                <div className="flex items-center gap-2">
                    <div>
                        <FaPhoneAlt />
                    </div>
                    <ActiveLink href="tel:+919953276022" exact classes={``} text="+91 9953276022" />
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        <FaPhoneAlt />
                    </div>
                    <ActiveLink href="tel:+919625992025" exact classes={``} text="+91 9625992025" />
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        <MdMail />
                    </div>
                    <ActiveLink href="mailto:support@traveltrailholidays.com" exact classes={``} text="support@traveltrailholidays.com" />
                </div>
                <div className="flex  gap-2">
                    <div className={`mt-[0.20rem]`}>
                        <MdMail />
                    </div>
                    <ActiveLink href="https://www.google.com/maps/place/Travel+Trail+Holidays/@28.499434,77.311883,18z/data=!4m6!3m5!1s0x233345ea4f02dbf5:0x55345f187277ecd2!8m2!3d28.4994338!4d77.3118827!16s%2Fg%2F11y3rzvw5z?hl=en&entry=ttu" exact classes={``} text="Office No - 35, Gali No. 03, Block B, Molarband Extn, Badarpur, New Delhi - 110044" />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;