import Link from "next/link";
import React from "react";

interface PlanProps {
    name: string;
}

function PlanCard(props: PlanProps) {
    return (
        <div className="flex flex-col gap-2 p-6 border-[.1px] duration-300 hover:bg-purple-200/30 hover:cursor-pointer border-pink-400 hover:shadow-xl rounded-lg shadow-lg bg-pink-300/50 ">
            <h3 className="text-xl font-bold"> {props.name} 
                <mark className="px-[5px] mx-2 py-[5px] text-sm rounded-lg bg-red-600/90 border-[.1px] border-black text-white align-middle">most popular</mark>
            </h3>
            <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </p>
            <div className="flex justify-around">
                <Link
                    href="#"
                    className="w-auto p-2 px-4 text-center text-white duration-700 rounded-md bg-rose-950/90 hover:shadow-lg"
                >
                    Subscribe
                </Link>
            </div>
        </div>
    );
}

export default PlanCard;
