"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";

const videoResources = [
    {
        id: "video-1",
        title: "全球水循环",
        path: "/videos/global-water-cycle.mp4",
        description: "本视频展示了与环境及生态学研究密切相关的全球水循环机制。"
    },
    {
        id: "video-2",
        title: "农业生态",
        path: "/videos/agricultural-ecology.mp4",
        description: "本视频涵盖了与农业科学研究相关的农业生态系统核心原理。"
    }
];

export default function VideosPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">科研视频资源</h1>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {videoResources.map((video) => (
                        <StaggerItem key={video.id} className="flex flex-col bg-graybg rounded-2xl overflow-hidden shadow-md border border-graybg-dark">
                            <div className="p-6 bg-primary text-white">
                                <h2 className="text-2xl font-bold">{video.title}</h2>
                            </div>
                            <div className="relative w-full aspect-video bg-gray-900">
                                <video
                                    className="w-full h-full object-contain"
                                    controls
                                    preload="metadata"
                                    poster="/video-placeholder.svg"
                                >
                                    <source src={video.path} type="video/mp4" />
                                    您的浏览器不支持 HTML5 视频播放。
                                </video>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-gray-700 leading-relaxed">{video.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <FadeIn delay={0.4} className="mt-16 p-6 bg-accent/10 rounded-xl border border-accent/20 text-center">
                    <p className="text-primary-light font-medium flex items-center justify-center">
                        <span className="text-accent text-xl mr-2">ℹ️</span>
                        注：以上视频材料作为补充学习资源，专供参训学员内部交流使用。
                    </p>
                </FadeIn>
            </div>
        </div>
    );
}
