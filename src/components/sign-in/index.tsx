'use client';

import Logo from "@/app/components/logo";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="flex items-center w-full justify-center relative mt-5">
                <Link
                    href="/"
                    className="flex justify-center items-center"
                >
                    <FaArrowLeft className="absolute left-2" />
                </Link>
                <Logo />
            </div>
            <span className="text-xl sm:text-3xl font-semibold">
                Sign in to Travel Trail Holidays
            </span>
            <button 
                onClick={() => signIn('google')}
                className="bg-blue-900 max-w-[450px] w-full p-2 rounded mt-5 flex items-center justify-center gap-2">
                <FcGoogle size={32}/>
                <span className="font-medium">Sign in with Google</span>
            </button>
        </div>
    )
}

export default SignIn