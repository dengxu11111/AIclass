import zipfile
import os
import xml.etree.ElementTree as ET

docx_file = "最新AI驱动科研全链路实战营：贯通LLM应用→数据分析→自动化编程→文献及知识管理→科研写作与绘图→构建本地LLM、Agent→多模型圆桌会议→N8N自动化工作流→OpenClaw个人AI助手→科研科普视频生成深度应用培训班.docx"
extract_dir = "docx_extracted"

with zipfile.ZipFile(docx_file, 'r') as zip_ref:
    zip_ref.extractall(extract_dir)

# Read document.xml
xml_content = open(os.path.join(extract_dir, "word", "document.xml"), encoding="utf-8").read()
root = ET.fromstring(xml_content.encode('utf-8'))

namespaces = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
}

# read relationships to map rId to target media file
rels_xml = open(os.path.join(extract_dir, "word", "_rels", "document.xml.rels"), encoding="utf-8").read()
rels_root = ET.fromstring(rels_xml.encode('utf-8'))
rels = {}
for rel in rels_root.findall('.//{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
    rels[rel.attrib['Id']] = rel.attrib['Target']

with open("docx_output_utf8.txt", "w", encoding="utf-8") as f:
    for elem in root.iter():
        if elem.tag == '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p':
            texts = [t.text for t in elem.findall('.//w:t', namespaces) if t.text]
            if texts:
                f.write("TEXT: " + "".join(texts) + "\n")
        elif elem.tag == '{http://schemas.openxmlformats.org/drawingml/2006/blipFill}blip' or elem.tag == '{http://schemas.openxmlformats.org/drawingml/2006/main}blip':
            rId = elem.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
            if rId and rId in rels:
                f.write(f"IMAGE: {rels[rId]}\n")
