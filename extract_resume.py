import pdfplumber
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf = pdfplumber.open(r'd:\Projects\Portfolio\resume-new.pdf')
for page in pdf.pages:
    text = page.extract_text()
    if text:
        print(text)
pdf.close()
