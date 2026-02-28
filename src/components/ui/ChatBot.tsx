"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseDetails } from "@/constants/courseDetails";

interface Message {
    id: string;
    sender: "user" | "bot";
    text: string;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            sender: "bot",
            text: "您好！我是爱尚研修科研实战营的AI专属助手🤖。\n我可以为您解答关于：\n📚 课程大纲\n⏰ 开课时间\n💰 报名费用\n🎫 发票与证书\n请问有什么我可以帮您的吗？"
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue.trim();
        const userMsg: Message = { id: Date.now().toString(), sender: "user", text: userMessage };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsLoading(true);

        try {
            // Prepare messages for the API (OpenAI format)
            const apiMessages = messages
                .filter(m => m.id !== "1") // Skip initial welcome message from history if needed, or keep it
                .map(m => ({
                    role: m.sender === "user" ? "user" : "assistant",
                    content: m.text
                }));

            apiMessages.push({ role: "user", content: userMessage });

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: apiMessages }),
            });

            if (!response.ok) {
                throw new Error("Failed to get response");
            }

            const data = await response.json();
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: "bot",
                text: data.content || "抱歉，我现在无法回答，请稍后再试。"
            };
            setMessages((prev) => [...prev, botMsg]);
        } catch (error) {
            console.error("Chat Error:", error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: "bot",
                text: "抱歉，连接AI助手时出现了一些问题。建议您联系人工客服贾莲（微信：193-3122-6341）获得更准确的帮助。"
            };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl z-[90] focus:outline-none border-[3px] border-white cursor-pointer"
                style={{ boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.5), 0 8px 10px -6px rgba(212, 175, 55, 0.4)" }}
            >
                {isOpen ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-28 right-4 lg:right-10 w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] max-h-[70vh] bg-white rounded-3xl shadow-2xl z-[90] flex flex-col overflow-hidden border border-gray-200"
                    >
                        {/* Chat Header */}
                        <div className="bg-primary p-4 text-white flex items-center shadow-md relative z-10">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3 font-bold text-xl border-2 border-white/20">
                                AI
                            </div>
                            <div>
                                <h3 className="font-bold text-md leading-tight">科研营智能助手</h3>
                                <p className="text-xs text-accent-light opacity-80 flex items-center mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
                                    全程在线为您解答
                                </p>
                            </div>
                        </div>

                        {/* Chat Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto bg-graybg flex flex-col gap-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[85%] rounded-2xl p-3 text-sm whitespace-pre-wrap leading-relaxed shadow-sm
                      ${msg.sender === "user"
                                                ? "bg-accent text-white rounded-tr-sm"
                                                : "bg-white text-gray-800 border border-gray-100 rounded-tl-sm"
                                            }`}
                                    >
                                        {/* Basic markdown parsing for bold text */}
                                        {msg.text.split(/(\*\*.*?\*\*)/).map((part, i) => {
                                            if (part.startsWith("**") && part.endsWith("**")) {
                                                return <strong key={i} className={msg.sender === "user" ? "text-white" : "text-primary"}>{part.slice(2, -2)}</strong>;
                                            }
                                            return <span key={i}>{part}</span>;
                                        })}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-tl-sm p-3 shadow-sm flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Chat Input Area */}
                        <div className="p-3 bg-white border-t border-gray-100">
                            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="询问报名、课程、费用等问题..."
                                    className="flex-1 px-4 py-2.5 bg-graybg border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <svg className="w-4 h-4 translate-x-[-1px] translate-y-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
