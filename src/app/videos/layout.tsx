import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '科研视频资源 | 爱尚研修科研训练平台',
    description: 'AI驱动科研全链路实战营的补充视频学习资源。',
};

export default function VideosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
