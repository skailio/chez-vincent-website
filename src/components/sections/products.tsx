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
                            className="group relative bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors duration-300 border border-white/5 hover:border-gold/50"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-gold transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
