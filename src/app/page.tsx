"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import AboutUsSection from "@/components/ui/about-us-section";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { Reviews } from "@/components/sections/reviews";
import { Info } from "@/components/sections/info";
import { Home, Info as InfoIcon, ShoppingBag, Star } from "lucide-react";

import { Categories } from "@/components/sections/categories";

export default function Page() {
    const navItems = [
        { name: 'Savoir-Faire', url: '#about-section', icon: Home },
        { name: 'Produits', url: '#products', icon: ShoppingBag },
        { name: 'Avis', url: '#reviews', icon: Star },
        { name: 'Contact', url: '#info', icon: InfoIcon }
    ];

    return (
        <main className="min-h-screen bg-dark relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-50 pointer-events-none fixed z-0"></div>
            <Hero />
            <div className="relative z-10">
                <Categories />
                <AboutUsSection />
                <Products />
                <Reviews />
                <Info />
            </div>

            <NavBar items={navItems} className="block" />

            <footer className="bg-black py-8 text-center text-gray-600 text-sm border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} Chez Vincent - Boucherie Charcuterie Artisanale</p>
            </footer>
        </main>
    );
}
