export interface Chapter {
    id: string;
    chapterNumber: number;
    title: string;
    description: string;
    topics?: string[];
    content?: string;
    imagePath?: string;
    linkUrl?: string;
    linkText?: string;
}

export interface CourseDetail {
    dates: string;
    format: string;
    features: string[];
    certificate: string;
}

export interface NavLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface VideoResource {
    id: string;
    title: string;
    path: string;
    description: string;
}
