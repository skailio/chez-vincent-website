"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
    Award,
    Users,
    Calendar,
    CheckCircle,
    Sparkles,
    Star,
    ArrowRight,
    Zap,
    TrendingUp,
    UtensilsCrossed,
    ChefHat,
    Heart
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

export default function AboutUsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
    const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

    // Parallax effect for decorative elements
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants: any = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const services = [
        {
            icon: <UtensilsCrossed className="w-6 h-6" />,
            secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-gold" />,
            title: "Savoir-Faire",
            description:
                "Une découpe traditionnelle et un respect absolu du produit pour vous garantir tendreté et saveur.",
            position: "left",
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-gold" />,
            title: "Qualité",
            description:
                "Une sélection rigoureuse de viandes issues d'élevages respectueux et locaux.",
            position: "left",
        },
        {
            icon: <Heart className="w-6 h-6" />,
            secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-gold" />,
            title: "Passion",
            description:
                "L'amour du métier transmis par Vincent et Deborah, au service de votre table.",
            position: "left",
        },
        {
            icon: <ChefHat className="w-6 h-6" />,
            secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-gold" />,
            title: "Fait Maison",
            description:
                "Terrines, pâtés, saucissons... Tout est préparé sur place dans notre atelier.",
            position: "right",
        },
        {
            icon: <Users className="w-6 h-6" />,
            secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-gold" />,
            title: "Proximité",
            description:
                "Un commerce de village où l'accueil et le conseil sont au cœur de la relation.",
            position: "right",
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-gold" />,
            title: "Fraîcheur",
            description:
                "Des arrivages quotidiens pour une fraîcheur irréprochable.",
            position: "right",
        },
    ]

    const stats = [
        { icon: <Award />, value: 178, label: "Avis Clients", suffix: "+" },
        { icon: <Star />, value: 4.7, label: "Note Google", suffix: "/5" },
        { icon: <Calendar />, value: 7, label: "Jours / 7", suffix: "" },
        { icon: <TrendingUp />, value: 100, label: "Qualité", suffix: "%" },
    ]

    return (
        <section
            id="about-section"
            ref={sectionRef}
            className="w-full py-24 px-4 bg-parchment text-dark overflow-hidden relative"
        >
            {/* Decorative background elements */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
                style={{ y: y1, rotate: rotate1 }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-bordeaux/5 blur-3xl"
                style={{ y: y2, rotate: rotate2 }}
            />

            <motion.div
                className="container mx-auto max-w-6xl relative z-10"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
                    <motion.span
                        className="text-bordeaux font-medium mb-2 flex items-center gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Zap className="w-4 h-4" />
                        NOTRE HISTOIRE
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center text-dark">Chez Vincent</h2>
                    <motion.div
                        className="w-24 h-1 bg-gold"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                </motion.div>

                <motion.p className="text-center max-w-2xl mx-auto mb-16 text-dark/80 font-sans" variants={itemVariants}>
                    Vincent et Deborah vous accueillent dans leur boucherie artisanale au cœur de Breuillet.
                    Passionnés par le goût et le savoir-faire, nous redonnons ses lettres de noblesse au commerce de village.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Left Column */}
                    <div className="space-y-16">
                        {services
                            .filter((service) => service.position === "left")
                            .map((service, index) => (
                                <ServiceItem
                                    key={`left-${index}`}
                                    icon={service.icon}
                                    secondaryIcon={service.secondaryIcon}
                                    title={service.title}
                                    description={service.description}
                                    variants={itemVariants}
                                    delay={index * 0.2}
                                    direction="left"
                                />
                            ))}
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
                        <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
                            <motion.div
                                className="rounded-md overflow-hidden shadow-xl border-4 border-white"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                            >
                                <img
                                    src="/assets/images/vincent_deborah.svg"
                                    alt="Vincent et Deborah"
                                    className="w-full h-full object-cover"
                                />

                            </motion.div>
                            <motion.div
                                className="absolute inset-0 border-4 border-gold rounded-md -m-3 z-[-1]"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            ></motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-16">
                        {services
                            .filter((service) => service.position === "right")
                            .map((service, index) => (
                                <ServiceItem
                                    key={`right-${index}`}
                                    icon={service.icon}
                                    secondaryIcon={service.secondaryIcon}
                                    title={service.title}
                                    description={service.description}
                                    variants={itemVariants}
                                    delay={index * 0.2}
                                    direction="right"
                                />
                            ))}
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div
                    ref={statsRef}
                    className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    animate={isStatsInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {stats.map((stat, index) => (
                        <StatCounter
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            label={stat.label}
                            suffix={stat.suffix}
                            delay={index * 0.1}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

interface ServiceItemProps {
    icon: React.ReactNode
    secondaryIcon?: React.ReactNode
    title: string
    description: string
    variants: any
    delay: number
    direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
    return (
        <motion.div
            className="flex flex-col group"
            variants={variants}
            transition={{ delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className="flex items-center gap-3 mb-3"
                initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: delay + 0.2 }}
            >
                <motion.div
                    className="text-bordeaux bg-bordeaux/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-bordeaux/20 relative"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                >
                    {icon}
                    {secondaryIcon}
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-dark group-hover:text-bordeaux transition-colors duration-300">
                    {title}
                </h3>
            </motion.div>
            <motion.p
                className="text-sm text-dark/80 leading-relaxed pl-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: delay + 0.4 }}
            >
                {description}
            </motion.p>
        </motion.div>
    )
}

interface StatCounterProps {
    icon: React.ReactNode
    value: number
    label: string
    suffix: string
    delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
    const countRef = useRef(null)
    const isInView = useInView(countRef, { once: false })
    const [hasAnimated, setHasAnimated] = useState(false)

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 10,
    })

    useEffect(() => {
        if (isInView && !hasAnimated) {
            springValue.set(value)
            setHasAnimated(true)
        }
    }, [isInView, value, springValue, hasAnimated])

    const displayValue = useTransform(springValue, (latest) => {
        if (latest % 1 !== 0) return latest.toFixed(1);
        return Math.floor(latest).toString();
    })

    return (
        <motion.div
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay },
                },
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className="w-14 h-14 rounded-full bg-dark/5 flex items-center justify-center mb-4 text-bordeaux group-hover:bg-bordeaux/10 transition-colors duration-300"
                whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
            >
                {icon}
            </motion.div>
            <motion.div ref={countRef} className="text-3xl font-bold text-dark flex items-center">
                <motion.span>{displayValue}</motion.span>
                <span>{suffix}</span>
            </motion.div>
            <p className="text-dark/70 text-sm mt-1">{label}</p>
            <motion.div className="w-10 h-0.5 bg-bordeaux mt-3 group-hover:w-16 transition-all duration-300" />
        </motion.div>
    )
}
