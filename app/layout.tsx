import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


// COMPONENTS
import HeaderWrapper from "@/src/components/MainLayout/HeaderWrapper";


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Spending Tabs",
    description: "Create and manage spending tabs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <HeaderWrapper />
                {children}
            </body>
        </html>
    );
}
