import { Chapter } from "@/types";

export const chapters: Chapter[] = [
    {
        id: "chapter-1",
        chapterNumber: 1,
        title: "大语言模型能力边界认知",
        description: "涵盖 ChatGPT、Claude、Gemini、DeepSeek 和 NotebookLM。指导科研人员如何为各项任务选择合适的模型。",
        content: "真正理解不同LLM与知识增强型AI（NotebookLM）的能力边界，学会在科研和高端工作中“因任务选模型，因资料选工具”。\n核心内容：\n1. 主流大模型能力拆解：ChatGPT（科研写作、推理）、Claude（长文档、润色）、Gemini（多模态）、DeepSeek（数学、代码）。\n2. NotebookLM 的设计理念：以资料为核心，自动标注引用，避免幻觉。\n3. 大模型智能从何而来：上下文窗口与推理链。\n4. 科研与工作的模型选型策略。"
    },
    {
        id: "chapter-2",
        chapterNumber: 2,
        title: "基于 LLM + Excel 的智能数据分析",
        description: "运用 LLM 和 Excel 实现科研领域的智能数据分析与自动化处理。",
        content: "用自然语言“操控”Excel，让Excel成为科研数据分析助手。\n核心内容：\n1. LLM自动生成复杂公式\n2. 科研数据清洗与异常检测\n3. 统计结果自动解读与文字化\n4. Excel→论文结果段落自动生成\n5. LLM分析数据质量是否能用于科研\n实操：上传实验数据，LLM自动完成分析和图表生成思路。",
        imagePath: "/chapters/image4.png"
    },
    {
        id: "chapter-3",
        chapterNumber: 3,
        title: "LLM与Python科学计算自动化",
        description: "利用 LLM 辅助 Python 编程，实现高效的科学计算自动化与代码编写助理。",
        content: "让不会写代码的人，也能把Python变成科研生产力；让会写代码的人，用LLM进入10倍效率区间。\n核心内容：\n1. Python在科研中的真实定位：科研流程自动化工具。\n2. LLM自动生成科研级Python代码。\n3. 从实验设计描述直接生成Python分析脚本。\n4. 自动补全pandas, numpy, scipy, matplotlib等。\n最终成果：可复现的Python脚本与可直接用于论文的图和描述。",
        imagePath: "/chapters/image5.png"
    },
    {
        id: "chapter-4",
        chapterNumber: 4,
        title: "Zotero + NotebookLM + LLM 文献管理",
        description: "智能文献管理与循证驱动的科研写作方法论。",
        content: "从“存论文”升级为“以文献为证据核心的可推理科研系统”。\n核心内容：\n1. Zotero高效文献管理（批量PDF总结、研究脉络分析）。\n2. NotebookLM 文献级科研推理中枢（所有分析基于你上传的PDF，结论可追溯）。\n3. 防止“AI文献幻觉”的系统方法：科研可信度的三层防线。\n实操：导入20篇相关核心论文，NotebookLM自动输出研究脉络和主流方法对比。"
    },
    {
        id: "chapter-5",
        chapterNumber: 5,
        title: "Overleaf + LLM 助力科研写作",
        description: "包含 LaTeX 排版和论文架构生成的全流程科研写作指导。",
        content: "把论文写作变成“流程”。\n核心内容：\n1. LaTeX语言的应用。\n2. Overleaf科研写作规范。\n3. LLM生成论文结构，并分章节生成论文初稿。\n4. Open AI Prism如何助力科研写作，包括快速处理数学公式、论文引用。\n实操通过GPT等模型多模态功能，将手写公式直接导入论文。",
        imagePath: "/chapters/image6.png"
    },
    {
        id: "chapter-6",
        chapterNumber: 6,
        title: "科研可视化与学术汇报制作",
        description: "利用 Gemini 和 NotebookLM，从论文插图绘制到学术汇报视频的完整制作流程。",
        content: "一张图胜千言！不会画图也能做Nature和Science级科研表达。\n核心内容：\n1. 科研图像的设计逻辑。\n2. API调用Gemini/Nano Banana：生成系列PPT和信息概念图。\n3. 利用NotebookLM生成学术汇报级Video和音频文件。\n4. 结合Adobe Illustrator处理排版插图要求。\n结课成果：一套论文插图 + 汇报Video。",
        imagePath: "/chapters/image8.png"
    },
    {
        id: "chapter-7",
        chapterNumber: 7,
        title: "本地 LLM 部署与私有科研 Agent 构建",
        description: "使用 Ollama 和 RAG 技术，在本地部署模型并构建私有化的科研智能体。",
        content: "保护科研IDEA，构建专属智能助手。\n核心内容：\n1. Ollama部署LLAMA/DeepSeek。\n2. 本地模型性能优化与RAG构建个人知识库。\n3. 微调vs RAG的选择策略。\n4. Open WebUI本地部署，结合Zotero搭建本地知识系统。\n实操：搭建无网环境下的可信AI，构建私密文献分析交互系统。",
        imagePath: "/chapters/image12.png"
    },
    {
        id: "chapter-8",
        chapterNumber: 8,
        title: "多模型圆桌科研系统",
        description: "利用 ChatGPT 和 Claude 协同工作，打造 AI 驱动的科研头脑风暴系统。",
        content: "用AI进行真正的科研头脑风暴。\n核心内容：\n1. 多LLM分工机制：批判型/创新型Agent设计。\n2. 自动迭代研究方案，模型能力越强IDEA创意更好。\n案例：ChatGPT+Claude自动进行多论讨论，生成创新研究方向。\n结课成果：一份可投稿级研究IDEA说明书。",
        imagePath: "/chapters/image13.png"
    },
    {
        id: "chapter-9",
        chapterNumber: 9,
        title: "科研自动化工作流 (N8N)",
        description: "结合 N8N 与 LLM，实现全链路的科研业务流程自动化。",
        content: "实现“科研自动化”，N8N × LLM 构建高效科研系统。\n核心内容：\n1. N8N基础与部署。\n2. 多软件自动联动，多模型优势整合。\n3. 全流程科研自动化设计。\n4. 整合Google工作流系统。\n实操：通过DeepSeek创建全自动科研文献搜索总结系统。",
        imagePath: "/chapters/image14.png"
    },
    {
        id: "chapter-10",
        chapterNumber: 10,
        title: "OpenClaw与智能体技能 (Agent Skills)",
        description: "利用 OpenClaw 构建能够自主进行写作的科研智能体。",
        content: "从进阶构建自主式写作智能体。\n核心内容：\n1. Open Claw核心机制。\n2. Agent Skill技能封装。\n3. 本地化环境搭建，写作指南(Writing Guide)建立。\n实操：根据相关论文自动撰写科研文章，自动化生成写作初稿（如Literature Review扩展段落等）。",
        imagePath: "/chapters/image15.png"
    },
    {
        id: "chapter-11",
        chapterNumber: 11,
        title: "自动化科研科普视频生成",
        description: "利用 Veo 3.1、Sora 2 和 Seedance 2.0 等视频生成模型，自动化制作科研科普类视频。",
        content: "了解多种视频大模型的基础机制与实战应用。\n核心内容：\n1. 三类视频大模型的能力边界：“单镜头” vs “多镜头” vs “音画同步”。\n2. 科研科普视频的“内容结构模板”。\n3. 用Seedance 2.0自动化生成科普短视频：提炼论文要点结合分镜自动生成解说与配套动态画面。\n\n**本章包含实操演示，详情请访问如下链接观看全部教学视频！**",
        linkUrl: "/videos",
        linkText: "点击观看科普视频与实操演示 →"
    }
];
