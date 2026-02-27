import sys
import subprocess
import os

try:
    import fitz
except ImportError:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'PyMuPDF'])
    import fitz

pdf_path = "最新AI驱动科研全链路实战营：贯通LLM应用→数据分析→自动化编程→文献及知识管理→科研写作与绘图→构建本地LLM、Agent→多模型圆桌会议→N8N自动化工作流→OpenClaw个人AI助手→科研科普视频生成深度应用培训班.pdf"

if not os.path.exists("public/chapters"):
    os.makedirs("public/chapters")

doc = fitz.open(pdf_path)

text_content = ""

for i in range(len(doc)):
    page = doc[i]
    text_content += f"--- PAGE {i+1} ---\n"
    text_content += page.get_text() + "\n"
    
    for img_index, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        img_name = f"public/chapters/page{i+1}_img{img_index}.png"
        
        if pix.n - pix.alpha < 4:       # this is GRAY or RGB
            pix.save(img_name)
        else:               # CMYK: convert to RGB first
            pix1 = fitz.Pixmap(fitz.csRGB, pix)
            pix1.save(img_name)
            pix1 = None
        pix = None

with open("pdf_text.txt", "w", encoding="utf-8") as f:
    f.write(text_content)

print(f"Extracted {len(doc)} pages of text and all images to public/chapters/")
