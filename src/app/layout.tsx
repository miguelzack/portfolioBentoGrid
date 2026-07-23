import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "@/styles/global.css";

const manrope = Manrope({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Portfolio - Miguel Silva",
    description: "Portfolio de Miguel Silva",
    keywords: [
        "Miguel Silva",
        "Portfolio",
        "Desenvolvedor",
        "Desenvolvimento Web",
        "Next.js",
        "React",
        "TypeScript",
        "Design",
        "Design System"
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${manrope.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}