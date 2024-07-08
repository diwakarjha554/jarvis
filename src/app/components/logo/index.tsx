import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex gap-2 items-center"
    >
      <Image
        src="/icon.png"
        alt="travel trail holidays"
        width={38}
        height={38}
      />
      <span className="font-semibold text-2xl text-[#FF5956]">
        Travel Trail Holidays
      </span>
    </Link>
  )
}

export default Logo;