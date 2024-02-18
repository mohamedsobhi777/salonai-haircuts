import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
    return (
        <Link
            className="flex items-center duration-300 hover:opacity-60"
            href="#"
        >
            <Image
                src="/static/logo-1.png"
                alt="Salonai Logo"
                width={100}
                height={50}
                className="object-contain  h-[60px]"
            />
            <p className="text-2xl">Salonai</p>
        </Link>
    );
}

export default Logo;
