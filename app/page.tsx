import Image from "next/image";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Workflow from "@/components/Workflow";
import Showcase from "@/components/Showcase";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";

export default function Home() {
    return (
        <main>
            <Banner />
            <Showcase />
            <Workflow />
            <Pricing />
            {/* <Newsletter/> */}
            <FAQ />
        </main>
    );
}
