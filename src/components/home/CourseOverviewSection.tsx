import { FadeIn, StaggerContainer } from "@/components/ui/AnimationWrappers";
import ChapterCard from "@/components/ui/ChapterCard";
import { chapters } from "@/constants/chapters";

export default function CourseOverviewSection() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">培训课程大纲</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        11个核心章节的系统化培训课程，旨在从根本上改变您的研究方法，大幅提升科研效率。
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {chapters.map((chapter) => (
                        <div key={chapter.id} className={chapter.chapterNumber === 11 ? "md:col-span-2 lg:col-span-1 xl:col-span-1" : ""}>
                            <FadeIn delay={0.1 * chapter.chapterNumber} duration={0.4} className="h-full">
                                <ChapterCard chapter={chapter} />
                            </FadeIn>
                        </div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
