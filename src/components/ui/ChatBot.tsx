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
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    // Keyword-based simulated AI logic
    const generateBotResponse = (input: string) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes("钱") || lowerInput.includes("多少") || lowerInput.includes("费用") || lowerInput.includes("价格")) {
            return "本次全链路实战营的培训费用为 **3980元/人**。\n\n**重磅福利：**报名即赠送1个月真实的 ChatGPT 高级会员账号，免翻墙直接使用，支持 Claude, Gemini, Grok 等多模型！";
        }

        if (lowerInput.includes("时间") || lowerInput.includes("时候") || lowerInput.includes("几号") || lowerInput.includes("日期")) {
            return `开课时间安排为：**${courseDetails.dates}**。\n\n培训形式主要是：${courseDetails.format}，并且会提供所有课程的长期回放权限，错过直播也不用担心。`;
        }

        if (lowerInput.includes("发票") || lowerInput.includes("报销") || lowerInput.includes("开票")) {
            return "我们支持开具正规发票用于单位报销，可开具的类目包括：\n- 培训费\n- 会议费\n- 资料费\n- 技术咨询费\n在报名时您可以选择自己需要的发票内容类型。";
        }

        if (lowerInput.includes("证明") || lowerInput.includes("证书")) {
            return `${courseDetails.certificate}。此证书可作为个人学习和知识更新、单位在职人员专业技能素质培养的重要参考依据，支持网上查验。`;
        }

        if (lowerInput.includes("大纲") || lowerInput.includes("课程") || lowerInput.includes("学什么") || lowerInput.includes("内容")) {
            return "培训共包含11个核心章节，从基础的提示词撰写到高级的本地Agent构建。\n重点涉及：\n1. LLM结合Excel智能分析\n2. AI生成Python自动化脚本\n3. Zotero与NotebookLM文献推理管理\n4. 本地Ollama架构部署与多模型协作\n5. AI自动化生成科研插图及视频。\n您可以点击导航栏的“课程大纲”查看所有详细的目录~";
        }

        if (lowerInput.includes("报名") || lowerInput.includes("怎么报") || lowerInput.includes("参加")) {
            return "您可以点击页面顶部的**“立即报名”**按钮，或者直接导航到【报名与注册】页面。在那里您可以通过企业微信或支付宝直接扫码支付，或者获取对公转账的银行账号。支付后请联系会务负责人（贾莲，微信：193-3122-6341）确认细节。";
        }

        if (lowerInput.includes("联系") || lowerInput.includes("微信") || lowerInput.includes("电话") || lowerInput.includes("人工")) {
            return "如需人工服务或联系会务组，请联系：\n**负责人**：贾莲\n**电话/微信**：193-3122-6341\n**客服QQ**：1632314244";
        }

        if (lowerInput.includes("你好") || lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("在吗")) {
            return "您好！很高兴为您服务。关于本次科研大模型实战训练营，您想了解哪方面的信息呢？无论是时间安排、课程内容还是发票费用，我都可以为您解答。";
        }

        return "抱歉，您提到的问题我可能无法完美解答。不过您可以将这个问题直接反馈给我们的专属客服贾莲（微信同号：193-3122-6341），或者在【关于我们】页面寻找更多介绍。";
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), sender: "user", text: inputValue };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");

        // Simulate AI thinking delay
        setTimeout(() => {
            const responseText = generateBotResponse(userMsg.text);
            const botMsg: Message = { id: (Date.now() + 1).toString(), sender: "bot", text: responseText };
            setMessages((prev) => [...prev, botMsg]);
        }, 600);
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
