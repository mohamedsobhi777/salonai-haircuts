import React from "react";
import StepCard from "./StepCard";

function Workflow() {
    return (
        <div className="flex flex-row lg:h-[calc(75vh)]  items-center justify-around p-4 py-8 pt-0">
            <div className="flex flex-col gap-2 max-w-7xl">
                <div className="py-4">
                    <p className="text-center text-white text-md md:text-xl">
                        unlock AI creativity
                    </p>
                    <h1 className="text-3xl text-center md:text-5xl text-rose-950">
                        How it works?
                    </h1>
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                    <StepCard title="Take a photo" />
                    <StepCard title="Choose a style" />
                    <StepCard title="Enjoy the results" />
                </div>
            </div>
        </div>
    );
}

export default Workflow;
