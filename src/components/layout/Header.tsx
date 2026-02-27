"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "@/constants/navigation";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-graybg-dark bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary sm:text-2xl">
                            爱尚研修
                        </span>
                        <span className="hidden text-sm text-gray-500 lg:inline-block">
                            让科研不再艰难
                        </span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-accent ${pathname === link.href ? "text-accent" : "text-primary-light"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center">
                    <Link
                        href="/register"
                        className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                        立即报名
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden flex flex-col items-center justify-center p-2 text-primary focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-current my-1 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
                </button>
            </div>

            {/* Mobile Nav overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute left-0 top-20 w-full bg-white border-b border-graybg-dark shadow-xl"
                    >
                        <nav className="flex flex-col p-4">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`py-3 px-4 text-base font-medium rounded-lg ${pathname === link.href ? "bg-graybg text-accent" : "text-primary-light hover:bg-graybg hover:text-accent"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-4 pt-4 border-t border-graybg-dark">
                                <Link
                                    href="/register"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full rounded-lg bg-accent px-4 py-3 text-center text-base font-medium text-white shadow-md transition-all hover:bg-accent-dark"
                                >
                                    立即报名
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
