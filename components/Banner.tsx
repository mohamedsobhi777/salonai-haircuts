import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
    return (
        <div className="flex flex-col-reverse justify-around gap-8 px-8 py-16 lg:h-[calc(100vh-116px)] md:flex-row">
            <div className="flex items-center ">
                <div className="flex flex-col items-center space-y-9">
                    <div className="w-full">
                        <h2 className="max-w-xl text-5xl text-bold">
                            Your next haircut is AI generated!
                        </h2>
                    </div>
                    <div className="w-full">
                        <p className="w-full max-w-xl text-xl">
                            The best resources and books from around the web,
                            collected and curated for your reading.
                        </p>
                    </div>
                    <div className="flex w-full m-2 flex-end">
                        <Link
                            href="#"
                            className="px-5 py-3 text-white rounded-xl hover:opacity-90 bg-black/90"
                        >
                            Try Now
                        </Link>
                    </div>
                </div>
            </div>


            <Image className="w-full md:w-auto opacity-90" alt="Banner Image" src="/static/banner-everything.png" width={400} height={400} />
        </div>
    );
}

export default Banner;
