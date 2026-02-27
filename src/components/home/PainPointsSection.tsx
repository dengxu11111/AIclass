import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";

const painPoints = [
    {
        title: "仅停留在浅层工具使用",
        problem: "大多数研究人员仅仅将 AI 作为高级搜索引擎或语法检查工具来使用。",
        agitation: "这仅仅触及皮毛，白白浪费了 AI 百分之九十以上的潜力，而您仍然深陷于重复性劳动的泥沼之中。",
        solution: "学习深度的框架整合方法，将 AI 转化为贯穿科研全生命周期的问题解决专家。"
    },
    {
        title: "科研生产力转化率低",
        problem: "难以将 AI 的输出转化为切实可见的科研生产力。",
        agitation: "您得到的往往是零散的代码片段或粗糙的文本，需要耗费大量时间进行人工润色，抵消了 AI 节省的时间。",
        solution: "掌握系统化的工作流，生成可直接用于分析、制图及达到发表标准的高质量文稿。"
    },
    {
        title: "缺乏系统化的创新能力",
        problem: "在 AI 飞速发展的今天，由于缺乏结构化的学习路径，逐渐被时代抛在脑后。",
        agitation: "碎片化的学习容易导致知识盲区。您可能会错失自主智能体（Agents）和本地大语言模型的强大能力，从而限制了您的研究视野。",
        solution: "建立一套结构化、可随技术持续迭代的个人科研体系，充分利用前沿智能体和多模型协同技术。"
    }
];

export default function PainPointsSection() {
    return (
        <section className="bg-graybg py-24 w-full">
            <div className="container mx-auto px-4 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">科学研究中面临的真实挑战</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => (
                        <StaggerItem key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-graybg-dark relative">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-3xl rounded-tr-2xl flex items-center justify-center text-accent font-black text-2xl -mt-px -mr-px z-0">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4 relative z-10">{point.title}</h3>
                            <div className="space-y-4 text-sm relative z-10">
                                <p className="text-gray-600"><strong className="text-primary-light font-semibold">痛点：</strong> {point.problem}</p>
                                <p className="text-red-700/80"><strong className="font-semibold">影响：</strong> {point.agitation}</p>
                                <p className="text-accent-dark"><strong className="font-semibold">解决方案：</strong> {point.solution}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
