"use client"

import { motion } from "framer-motion";
import { Beef, Drumstick, Fish, Sandwich, ChefHat } from "lucide-react";

const categories = [
    { id: 1, name: "Boeuf", icon: Beef },
    { id: 2, name: "Volaille", icon: Drumstick },
    { id: 3, name: "Charcuterie", icon: Sandwich },
    { id: 4, name: "Traiteur", icon: ChefHat },
    { id: 5, name: "Agneau", icon: Fish }, // Using Fish as placeholder for specialized meat if Lamb icon unavailable, or generic
];

export function Categories() {
    return (
        <section className="bg-bordeaux py-12 relative overflow-hidden">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center bg-black/10 group-hover:bg-white group-hover:text-bordeaux text-white transition-all duration-300 mb-3">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <span className="text-white font-heading font-bold uppercase tracking-wider text-sm group-hover:text-gold transition-colors">
                                    {cat.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
