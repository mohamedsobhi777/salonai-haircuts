import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";

function Header() {
    return (
        <nav className="sticky top-0 border-b-[.5px] border-gray-500 shadow-sm z-10">
            <div className="flex justify-around w-full py-2 bg-red-400 ">
                <div className="flex items-center space-x-4 ">
                    <Logo />

                    <form className="items-center flex-1 hidden p-2 space-x-2 bg-white rounded-md shadow-md md:flex md:flex-initial">
                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />

                        <input
                            type="text"
                            className="flex-1 outline-none"
                            placeholder="Search haircut styles..."
                        />
                    </form>
                </div>

                <div className="flex items-center p-2 space-x-5">
                    <Link
                        href="/gallery"
                        className="text-gray-800 hover:text-black"
                    >
                        Gallery
                    </Link>
                    <Link href="#">
                        <p className="px-4 py-2 text-white duration-300 bg-black rounded-md hover:opacity-80 hover:bg-gray-600">
                            Enter
                        </p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
