import { Metadata } from 'next';
import { FadeIn } from "@/components/ui/AnimationWrappers";
import { courseDetails } from "@/constants/courseDetails";

export const metadata: Metadata = {
    title: '报名注册 | 爱尚研修科研训练平台',
    description: '立即报名 AI 驱动科研全链路实战营。获取 4 天高强度集训及 ChatGPT 会员赠送等多项专属权益。',
};

export default function RegisterPage() {
    return (
        <div className="bg-graybg min-h-screen py-16">
            <div className="container mx-auto px-4 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">报名注册与收费标准</h1>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        锁定您的席位，加入最全面、最前沿的 AI 科研实战训练营。为保证社群辅导质量，名额有限，报名从速。
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    {/* Pricing Details */}
                    <div className="lg:col-span-2">
                        <FadeIn>
                            <div className="bg-primary rounded-3xl p-8 shadow-xl text-white sticky top-28">
                                <h2 className="text-2xl font-bold mb-2">全链路实战营</h2>
                                <p className="text-accent mb-6">4 天高能集训</p>

                                <div className="flex items-center text-white mb-8">
                                    <span className="text-2xl font-bold mr-1">¥</span>
                                    <span className="text-5xl font-black tracking-tighter">3980</span>
                                </div>

                                <div className="space-y-6 text-sm text-gray-300">
                                    <div>
                                        <h4 className="font-semibold text-white mb-2">包含权益：</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start"><span className="text-accent mr-2">✓</span> 全部 11 个章节及随堂课件</li>
                                            <li className="flex items-start"><span className="text-accent mr-2">✓</span> 长期课程回放权限</li>
                                            <li className="flex items-start"><span className="text-accent mr-2">✓</span> {courseDetails.certificate}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-2">重磅独家福利：</h4>
                                        <p className="bg-white/10 p-3 rounded-lg border border-accent/30 text-accent-light leading-relaxed">
                                            赠送 1 个月 ChatGPT 高级会员账号 <br /> (免翻墙，支持 Claude, Gemini, Grok 等多模型)
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-2">可开发票类型：</h4>
                                        <p>培训费、会议费、资料费、技术咨询费。</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Payment QR Codes */}
                    <div className="lg:col-span-3">
                        <FadeIn delay={0.2} className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-graybg-dark flex flex-col items-center justify-center text-center">
                            <h2 className="text-2xl font-bold text-primary mb-6">扫码支付报名</h2>
                            <p className="text-gray-600 mb-8 max-w-md">
                                请使用微信或支付宝扫描下方二维码完成支付。支付成功后，我们的专属会务负责人（贾莲）将与您确认具体细节。
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-lg">
                                <div className="flex flex-col items-center">
                                    <div className="w-48 h-48 bg-gray-100 rounded-xl mb-4 border-2 border-green-500/20 p-2 flex items-center justify-center overflow-hidden">
                                        <img src="/chapters/page16_img5.png" alt="企业微信收款码" className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                    <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                                        <span className="text-green-500 text-xl">💬</span> 企业微信收款码
                                    </h3>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-48 h-48 bg-gray-100 rounded-xl mb-4 border-2 border-blue-500/20 p-2 flex items-center justify-center overflow-hidden">
                                        <img src="/chapters/page16_img4.png" alt="企业支付宝收款码" className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                    <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                                        <span className="text-blue-500 text-xl">💳</span> 企业支付宝收款码
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-12 bg-graybg p-6 rounded-xl border border-gray-200 w-full text-left">
                                <h4 className="font-bold text-primary mb-3">银行对公汇款账户：</h4>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><span className="font-semibold text-gray-500 mr-2">账户：</span>尚研修（保定）信息科技有限公司</p>
                                    <p><span className="font-semibold text-gray-500 mr-2">开户行：</span>中国银行股份有限公司保定市裕华支行</p>
                                    <p><span className="font-semibold text-gray-500 mr-2">账号：</span>1006 6805 7415</p>
                                </div>
                                <p className="text-xs text-accent-dark mt-4">
                                    注：汇款或扫码支付后，请务必将支付凭证截图发至会务组（微信：193-3122-6341）。
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
}
