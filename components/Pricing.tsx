import React from "react";
import Plan from "./Plan";

function Pricing() {
    return (
        <div className="flex flex-col items-center gap-8 p-4 pb-24 py-36">
            <h2 className="text-3xl text-rose-950">
                <mark className="text-xl text-white align-middle bg-transparent">
                    afforable
                </mark>{" "}
                Pricing
            </h2>

            <div className="flex flex-col justify-around w-full gap-4 md:flex-row max-w-7xl">
                <Plan name="Basic" />
                <Plan name="Premium" />
                <Plan name="Lifetime" />
            </div>
        </div>
    );
}

export default Pricing;
