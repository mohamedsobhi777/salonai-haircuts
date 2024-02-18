import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Announcement from "@/components/Announcement";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Salonai - Creative AI Portraits",
    description: "Instant AI Portraits",
    icon: "favicon.ico",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className=" bg-gradient-to-r from-red-400/95 via-[#ff9f99] to-[#ff9e9b]/95 ">
                    <Announcement />
                    <Header />
                    {children}

                    <Footer />
                </main>
            </body>
        </html>
    );
}
