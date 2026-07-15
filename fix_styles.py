import os
import re

app_dir = r'c:\Users\user\Desktop\MYHITCH IMPACT\app'
for root, dirs, files in os.walk(app_dir):
    for f in files:
        if f.endswith('page.js'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Find the parallax-hero-bg block
            pattern_parallax = re.compile(r'<div\s+className=[\"\']parallax-hero-bg[\"\']\s+style=\{\{.*?\}\}>\s*<\/div>', re.DOTALL)
            
            def repl_parallax(match):
                text = match.group(0)
                # extract backgroundImage line
                bg_match = re.search(r'backgroundImage:\s*(`.*?`|\".*?\"|\'.*?\')', text)
                if bg_match:
                    bg_img = bg_match.group(1)
                    return f'<div className=\"parallax-hero-bg\" style={{{{ backgroundImage: {bg_img} }}}}></div>'
                else:
                    return '<div className=\"parallax-hero-bg\"></div>'
            
            new_content = pattern_parallax.sub(repl_parallax, content)
            
            # Find hero-content-anchor
            pattern_anchor = re.compile(r'<div\s+className=[\"\']hero-content-anchor[\"\']\s+style=\{\{.*?\}\}>', re.DOTALL)
            new_content = pattern_anchor.sub('<div className=\"hero-content-anchor\">', new_content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as file:
                    file.write(new_content)
                print(f'Updated {filepath}')
