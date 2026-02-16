"use client"

import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        title: "Viandes Sélectionnées",
        description: "Des pièces de bœuf, veau, agneau et porc choisies rigoureusement pour leur tendreté et leur goût.",
        image: "/assets/images/meat_selection.svg",
    },
    {
        id: 2,
        title: "Charcuterie Artisanale",
        description: "Saucissons, terrines et pâtés faits maison dans le respect des traditions.",
        image: "/assets/images/charcuterie.svg",
    },
    {
        id: 3,
        title: "Fait Maison",
        description: "Des plats cuisinés chaque jour pour régaler vos repas de famille ou vos déjeuners.",
        image: "/assets/images/homemade.svg",
    },
];

export function Products() {
    return (
        <section id="products" className="py-24 bg-dark text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-heading font-bold text-center text-gold mb-16"
                >
                    Nos Produits d'Exception
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-[#1a1212] border border-white/5 rounded-xl overflow-hidden shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                                {/* Gold Border overlay on hover */}
                                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 transition-all duration-300 z-10 rounded-xl m-2" />
                            </div>
                            <div className="p-8 text-center relative z-20">
                                <h3 className="text-2xl font-heading font-bold mb-3 text-white group-hover:text-gold transition-colors underline-offset-4 decoration-gold/0 group-hover:decoration-gold/100">
                                    {product.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                                    {product.description}
                                </p>
                                <button className="text-gold font-bold uppercase text-xs tracking-[0.2em] border-b border-gold/30 pb-2 group-hover:border-gold group-hover:tracking-[0.3em] transition-all duration-300">
                                    Découvrir
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
