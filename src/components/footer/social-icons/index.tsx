import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
    return (
        <div className="flex gap-5">
            <Link
                href="/"
                className="rounded-full bg-gray-700 w-10 h-10 flex justify-center items-center text-white">
                <FaFacebookF />
            </Link>
            <Link
                href="/"
                className="rounded-full bg-gray-700 w-10 h-10 flex justify-center items-center text-white">
                <FaLinkedinIn />
            </Link>
            <Link
                href="/"
                className="rounded-full bg-gray-700 w-10 h-10 flex justify-center items-center text-white">
                <FaXTwitter />
            </Link>
            <Link
                href="/"
                className="rounded-full bg-gray-700 w-10 h-10 flex justify-center items-center text-white">
                <FaInstagram />
            </Link>
        </div>
    )
}

export default SocialIcons;