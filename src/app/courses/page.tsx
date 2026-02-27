import { Metadata } from 'next';
import { chapters } from '@/constants/chapters';
import ChapterCard from '@/components/ui/ChapterCard';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrappers';

export const metadata: Metadata = {
    title: '课程大纲 | 爱尚研修科研训练平台',
    description: 'AI驱动科研全链路实战营完整课程大纲。涵盖ChatGPT应用、数据分析、Python自动化编程、文献管理与AI智能体构建。',
};

export default function CoursesPage() {
    return (
        <div className="bg-graybg min-h-screen py-16">
            <div className="container mx-auto px-4 lg:px-8">

                <FadeIn className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">完整课程大纲</h1>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        我们精心打磨的 11 章进阶课程，旨在帮助您从基础的 AI 使用者，成长为能够独立构建科研自主智能体的前沿学者。
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {chapters.map((chapter) => (
                        <FadeIn key={chapter.id} delay={0.1 * (chapter.chapterNumber % 3)} className="h-full">
                            <ChapterCard chapter={chapter} />
                        </FadeIn>
                    ))}
                </StaggerContainer>

            </div>
        </div>
    );
}
