import Haircut from "@/components/Haircut";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Showcase() {
    return (
        <div className="py-20 lg:h-[calc(75vh)] flex flex-col justify-center  items-center">
            <div className="p-4 font-mono text-center text-md md:text-xl lg:text-3xl">
                Explore{" "}
                <mark className="p-[6px] rounded-lg bg-gradient-to-r from-pink-500  to-yellow-500 text-white  border-white rotate-90">
                    incredible
                </mark>{" "}
                styles
            </div>
            <div className="flex flex-col justify-center gap-4 p-4 pt-2 md:flex-row max-w-7xl">
                <Haircut image="/ex1.jpeg" />

                <Haircut image="/ex2.jpeg" />
                <Haircut image="/static/ex3.png" />


                <Link
                    href="gallery"
                    className="p-4 pb-0 duration-500 rounded-lg shadow-sm hover:shadow-lg"
                >
                    <Image
                        src="/static/ex.png"
                        alt="haircut"
                        width={250}
                        height={400}
                    />
                </Link>
            </div>
            {/* <div className="text-center">More</div> */}
        </div>
    );
}

export default Showcase;
