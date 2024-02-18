import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";

function Footer() {
    return (
        <footer>
            <div className="grid w-full grid-cols-1 p-8 space-y-12 bg-red-400 md:grid-cols-2 border-t-[.5px] border-gray-500">
                <div className="flex flex-col gap-4">
                    <Logo />
                    <div className="flex flex-col gap-2 md:flex-row">
                        <p>@2023 Salonai.</p>
                        <p> All Rights Reserved.</p>
                    </div>
                </div>

                <div className="flex justify-between space-x-10">
                    <div className="flex flex-col items-center flex-1 ">
                        <ul>
                            <li>WEBSITE</li>
                            <li>
                                <Link href="#">Home</Link>
                            </li>
                            <li>
                                <Link href="#">Resources</Link>
                            </li>
                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                            <li>
                                <Link href="#">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                        <ul>
                            <li>MEMBERSHIP</li>
                            <li>Enter App</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
