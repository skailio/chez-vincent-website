import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-heading",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Chez Vincent | Boucherie Artisanale",
    description: "Boucherie Charcuterie artisanale haut de gamme à Breuillet.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="dark">
            <body className={cn(
                "min-h-screen bg-dark font-sans antialiased",
                playfair.variable,
                lato.variable
            )}
            >
                {children}
            </body>
        </html>
    );
}
