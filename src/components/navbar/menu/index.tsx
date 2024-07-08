'use client';

import ThemeSwitcher from "@/app/components/theme/ThemeSwitcher";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import AccountBtnMenu from "./account";
import Link from "next/link";
import { User } from "@prisma/client";
import { SafeUser } from "@/types";
import Avatar from "@/app/components/ui/Avatar";

interface MenuProps {
    currentUser?: SafeUser | null;
}

const Menu: React.FC<MenuProps> = ({ currentUser }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div
                onClick={toggleMenu}
                className="border-[3px] dark:border-gray-700 rounded-full px-3 py-2 hidden md:flex cursor-pointer items-center gap-2"
            >
                <HiMenuAlt3 size={20} className="text-gray-800 dark:text-gray-50" />
                <Avatar src={currentUser?.image}/>
            </div>

            {isOpen && (
                <div className="shadow-sm border-2 dark:border-gray-700 bg-white dark:bg-neutral-950 w-52 absolute right-0 rounded-2xl top-[3.5rem] py-2 flex flex-col text-lg font-semibold">
                    {currentUser ? (<>
                        <Link
                            href='/auth/signin'
                            className="px-2 py-3 flex items-center cursor-pointer hover:bg-gray-300 dark:hover:bg-[#3A3B3C] border-b dark:border-gray-700">
                            <AccountBtnMenu />
                        </Link> 
                        <div className="px-2 py-3 flex items-center cursor-pointer hover:bg-gray-300 dark:hover:bg-[#3A3B3C]">
                            <ThemeSwitcher />
                        </div>
                        <div className="px-2 py-3 flex items-center cursor-pointer hover:bg-gray-300 dark:hover:bg-[#3A3B3C]">
                            Logout
                        </div>
                    </>) : 
                    (<>
                        <Link
                            href='/auth/signin'
                            className="px-2 py-3 flex items-center cursor-pointer hover:bg-gray-300 dark:hover:bg-[#3A3B3C] border-b dark:border-gray-700">
                            <AccountBtnMenu />
                        </Link>   
                        <div className="px-2 py-3 flex items-center cursor-pointer hover:bg-gray-300 dark:hover:bg-[#3A3B3C]">
                            <ThemeSwitcher />
                        </div> 
                    </>)}
                </div>
            )}
        </div>
    )
}

export default Menu;