"use client"

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        id: 1,
        text: "Une boucherie exceptionnelle ! La qualité de la viande est incroyable et l'accueil de Vincent et Deborah est toujours chaleureux.",
        author: "Client Fidèle",
    },
    {
        id: 2,
        text: "Superbe découverte lors de nos vacances. Les produits sont frais, le conseil est top. On reviendra à coup sûr !",
        author: "Vacancier Heureux",
    },
    {
        id: 3,
        text: "Le renouveau de cette boucherie fait du bien au village. Qualité premium et service impeccable. Bravo !",
        author: "Habitant de Breuillet",
    },
];

export function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-dark relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-bordeaux/20 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-heading font-bold text-center text-white mb-16">Ils nous font confiance</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
                        >
                            <div className="flex gap-1 text-gold mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                            <p className="text-bordeaux font-bold uppercase tracking-wider text-sm">{review.author}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
