import React from "react";
import StepCard from "./StepCard";
import Question from "./Question";

function FAQ() {
    return (
        <div className="flex flex-col items-center gap-8 p-4 pb-24 py-36">
            <h2 className="text-3xl text-rose-950">FAQ</h2>
            <div className="flex flex-col justify-around w-full gap-4 max-w-7xl">
                <Question />
                <Question />
                <Question />
            </div>
        </div>
    );
}

export default FAQ;
