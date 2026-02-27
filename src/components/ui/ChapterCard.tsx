"use client";

import { useState } from "react";
import { Chapter } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ChapterCardProps {
    chapter: Chapter;
}

export default function ChapterCard({ chapter }: ChapterCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className="group h-full rounded-2xl bg-white p-6 shadow-md border border-graybg-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent relative overflow-hidden flex flex-col cursor-pointer"
            >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="mb-4 inline-flex h-10 items-center justify-center rounded-lg bg-graybg px-3 text-sm font-bold text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors self-start">
                    第 {chapter.chapterNumber.toString().padStart(2, '0')} 章
                </div>

                <h3 className="mb-3 text-xl font-bold text-primary flex-grow">
                    {chapter.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 line-clamp-3 group-hover:text-gray-900 transition-colors">
                    {chapter.description}
                </p>

                <div className="mt-4 pt-4 border-t border-graybg-dark flex items-center justify-between text-sm font-medium text-accent">
                    <span>点击查看详情</span>
                    <span>→</span>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors z-20"
                            >
                                ✕
                            </button>

                            <div className="p-8 sm:p-10 border-b border-primary-light bg-primary text-white rounded-t-3xl relative z-10">
                                <div className="mb-4 inline-flex h-8 items-center justify-center rounded-lg bg-accent/20 border border-accent/30 px-3 text-sm font-bold text-accent">
                                    第 {chapter.chapterNumber.toString().padStart(2, '0')} 章
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">{chapter.title}</h2>
                                {chapter.linkUrl && chapter.linkText && (
                                    <a
                                        href={chapter.linkUrl}
                                        className="inline-flex items-center justify-center px-6 py-3 mt-2 bg-white text-primary rounded-xl font-bold transition-all hover:bg-gray-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-max"
                                    >
                                        <span className="mr-2 text-xl">▶</span>
                                        {chapter.linkText}
                                    </a>
                                )}
                            </div>

                            <div className="p-8 sm:p-10 flex flex-col gap-8 flex-grow bg-graybg">
                                {chapter.content && (
                                    <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
                                        {chapter.content}
                                    </div>
                                )}

                                {chapter.imagePath && (
                                    <div className="mt-4 rounded-2xl overflow-hidden border border-gray-200 bg-white p-2 shadow-sm flex justify-center">
                                        <Image
                                            src={chapter.imagePath}
                                            alt={chapter.title}
                                            width={800}
                                            height={600}
                                            className="object-contain w-full h-auto max-h-[600px] rounded-xl"
                                            unoptimized
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
