import Haircut from "@/components/Haircut";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
    return (
        <div>
            <div className="px-4 pt-2">10934 Available haircuts</div>
            <div className="grid grid-cols-1 gap-4 p-4 pt-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
                <Haircut image="/static/ex.png" />
            </div>
            <div className="text-center">More</div>
        </div>
    );
}

export default page;
