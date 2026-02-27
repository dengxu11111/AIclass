import Link from "next/link";
import { navigationLinks } from "@/constants/navigation";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12 border-t border-primary-light">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-accent">爱尚研修科研训练平台</h3>
                        <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
                            最新 AI 驱动科研全链路实战营。致力于为科研人员、硕博研究生及高校教师提供前沿、高效的“让科研不再艰难”解决方案。
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-primary-light pb-2 inline-block">快速导航</h3>
                        <ul className="space-y-2">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 hover:text-accent transition-colors block py-1"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-primary-light pb-2 inline-block">联系我们</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start">
                                <span className="font-medium mr-2 text-white">联系人：</span> 贾莲
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium mr-2 text-white">电话：</span> 193-3122-6341
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium mr-2 text-white">微信：</span> 193-3122-6341
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium mr-2 text-white">QQ：</span> 1632314244
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-primary-light text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} 尚研保定信息科技有限公司。保留所有权利。
                    </p>
                </div>
            </div>
        </footer>
    );
}
