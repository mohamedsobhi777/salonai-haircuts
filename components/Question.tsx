"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function Question() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div
            className="flex flex-col gap-4 p-4 duration-300 shadow-lg rounded-xl hover:shadow-xl bg-pink-300/10 focus:cursor-pointer hover:cursor-pointer"
            onClick={() => {
                setVisible((state) => !state);
            }}
        >
            <div className="flex flex-row items-center justify-between">
                <p>What is Salonai?</p>
                <ChevronDownIcon className="w-4 h-4" />
            </div>

            <div
                className={`${
                    visible ? "h-8" : "hidden"
                }  transition-height overflow-hidden duration-700 ease-in-out`}
            >
                <p>Salonai is a generative AI tool for haircuts.</p>
            </div>
        </div>
    );
}

export default Question;
