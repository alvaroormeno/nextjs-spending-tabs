import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'

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
        <ClerkProvider>
            <html lang="en">
                <body className={`${geistSans.variable} ${geistMono.variable}`} style={{margin: 0, padding: 0, minHeight: '100vh'}}>
                    <HeaderWrapper />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
