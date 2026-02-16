"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} id="hero" className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center bg-dark">
            {/* Background Texture/Image with Cinematic Zoom */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 opacity-40 overflow-hidden"
            >
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/images/hero_shop.svg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/50 to-dark" />
            </motion.div>

            {/* Decorative Floating Elements (Ingredients) - Placeholders */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[10%] w-24 h-24 bg-contain bg-no-repeat opacity-80 hidden md:block"
                style={{ backgroundImage: "url('/assets/images/meat_selection.svg')" }}
            />
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 right-[10%] w-32 h-32 bg-contain bg-no-repeat opacity-80 hidden md:block"
                style={{ backgroundImage: "url('/assets/images/charcuterie.svg')" }}
            />

            {/* Central Content */}
            <div className="relative z-10 text-center container px-4 flex flex-col items-center">

                {/* "Meat Shop" Stamp Effect */}
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                    className="absolute -top-12 right-1/4 md:right-1/3 bg-bordeaux text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xs uppercase tracking-widest border-2 border-dashed border-white/30 shadow-lg z-20"
                >
                    Since 1998
                </motion.div>

                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white mb-4 drop-shadow-xl"
                >
                    Butcher <span className="text-bordeaux">&</span> Meat
                </motion.h1>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative w-full max-w-4xl mx-auto my-8"
                >
                    {/* Main Product/Board Image */}
                    <img
                        src="/assets/images/meat_selection.svg"
                        alt="Premium Meat Board"
                        className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-10"
                >
                    L’excellence artisanale au cœur de Breuillet.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex gap-6"
                >
                    <Link href="#products" className="bg-bordeaux hover:bg-white hover:text-bordeaux text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-bordeaux/20">
                        Nos Produits
                    </Link>
                    <Link href="#info" className="border-2 border-white text-white hover:bg-white hover:text-dark px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300">
                        Contact
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
