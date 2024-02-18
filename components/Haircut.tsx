import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HaircutProps {
    image: string;
}

function Haircut(props: HaircutProps) {
    return (
        <Link
            href="gallery"
            className="flex items-center pb-0 duration-500 rounded-lg shadow-sm hover:shadow-lg"
        >
            <Image className="" src={props.image} alt="haircut" width={250} height={400} />
        </Link>
    );
}

export default Haircut;
