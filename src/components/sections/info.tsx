"use client"

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export function Info() {
    return (
        <section id="info" className="py-24 bg-white text-dark">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Info Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="text-4xl font-heading font-bold text-dark mb-8">Infos Pratiques</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-bordeaux mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Adresse</h3>
                                    <p className="text-gray-600">43 Rue du Centre, 17920 Breuillet</p>
                                    <a
                                        href="https://www.google.com/maps/dir//43+Rue+du+Centre,+17920+Breuillet"
                                        target="_blank"
                                        className="text-bordeaux text-sm font-bold mt-2 inline-flex items-center gap-1 hover:underline"
                                    >
                                        Itinéraire <Navigation className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-bordeaux mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Téléphone</h3>
                                    <a href="tel:+33546227239" className="text-gray-600 hover:text-bordeaux transition-colors font-bold text-xl">
                                        05 46 22 72 39
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-bordeaux mt-1" />
                                <div className="w-full max-w-sm">
                                    <h3 className="font-bold text-lg mb-2">Horaires d'ouverture</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between border-b border-gray-100 pb-1">
                                            <span className="text-gray-500">Lundi</span>
                                            <span className="font-bold text-gray-300">Fermé</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-100 pb-1">
                                            <span className="text-gray-500">Mardi - Dimanche</span>
                                            <span className="font-bold text-dark">07:30 - 13:00 / 15:30 - 19:30</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.965487779774!2d-1.0545!3d45.693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4801760000000001%3A0x1234567890abcdef!2s43%20Rue%20du%20Centre%2C%2017920%20Breuillet!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
