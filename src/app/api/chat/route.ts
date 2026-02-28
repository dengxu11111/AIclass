import { NextResponse } from "next/server";
import { aiContext } from "@/constants/aiContext";

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const apiKey = process.env.OPENROUTER_API_KEY;

        if (!apiKey) {
            console.error("OPENROUTER_API_KEY is not defined in environment variables");
            return NextResponse.json(
                { error: "API Key not configured" },
                { status: 500 }
            );
        }

        const systemPrompt = `你是一个专业的科研教育助手，代表 "${aiContext.platformName}" 服务。公司是 "${aiContext.companyName}"。
你的使命是 "${aiContext.mission}"。

你的回答必须严格基于以下网站提供的信息：

1. 课程名称：${aiContext.courseTitle}
2. 费用：${aiContext.price}。
3. 时间与形式：${aiContext.dates}。形式为 ${aiContext.format}。
4. 核心权益：${aiContext.benefits.join("；")}。
5. 课程大纲 (共11章)：
${aiContext.chapters.map(c => `   - 第${c.num}章 ${c.title}：${c.details}`).join("\n")}
6. 学习成果：${aiContext.outcomes.join("、")}。
7. 发票：支持开具 ${aiContext.invoiceTypes.join("、")} 等正规发票。
8. 报名联系：负责人 ${aiContext.contact.representative}，电话/微信 ${aiContext.contact.phone}，QQ ${aiContext.contact.qq}。
9. 收款方式：支持 ${aiContext.payment.methods.join("、")}。
   - 银行对公信息：账户名：${aiContext.payment.bankInfo.accountName}，开户行：${aiContext.payment.bankInfo.bank}，账号：${aiContext.payment.bankInfo.accountNumber}。

回答准则：
- 语气专业、亲切、富有洞察力。
- 尽可能使用 Markdown 格式让回答清晰易读。
- 如果用户询问课程内容，请简要总结相关章节的亮点。
- 如果用户询问费用或证书，请强调赠送的 ChatGPT 会员价值和证书的认可度。
- 鼓励用户扫码报名或添加负责人微信进一步咨询。
- 遇到无法确定的细节，请引导用户联系人工客服 ${aiContext.contact.representative}。`;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "HTTP-Referer": "https://ai-class-website.vercel.app", // Optional
                "X-Title": "AI Class Website", // Optional
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "openai/gpt-oss-120b:free",
                messages: [
                    { role: "system", content: systemPrompt },
                    ...messages
                ],
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("OpenRouter API Error:", data);
            return NextResponse.json(
                { error: data.error?.message || "Failed to fetch from OpenRouter" },
                { status: response.status }
            );
        }

        const botMessage = data.choices[0].message;
        return NextResponse.json(botMessage);
    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
