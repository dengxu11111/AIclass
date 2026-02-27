import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configure Noto Sans SC font
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "爱尚研修科研训练平台 | Ai Shang Research Training Platform",
  description: "最新 AI 驱动科研全链路实战营。致力于为科研人员提供前沿、高效的解决方案，让 AI 成为您稳固且可进化的科研合作伴侣。",
  keywords: "科研, AI, 人工智能, LLM, 训练营, GPT, 学术前沿",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSansSC.variable} font-sans antialiased text-primary-dark min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
