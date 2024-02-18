import React from "react";

interface StepProps {
    title: string;
}

function StepCard(props: StepProps) {
    return ( 
        <div className="flex flex-col gap-2 p-6 border-[.1px] duration-300 hover:bg-purple-200/30 hover:cursor-pointer border-pink-400 hover:shadow-xl rounded-lg shadow-lg bg-pink-300/50">
            <h3 className="text-xl font-bold">Step 1: {props.title}</h3>
            <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </p>
        </div>
    );
}

export default StepCard;
