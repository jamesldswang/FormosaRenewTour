"""Generate lang/zh-Hans.js (Simplified Chinese) from lang/zh-Hant.js.

Usage:  pip install opencc-python-reimplemented
        python tools/make_zh_hans.py

OpenCC "tw2sp" converts characters AND Taiwan -> Mainland vocabulary.
Add any wording you want to adjust after conversion to FIXES below.
Do not edit zh-Hans.js by hand — it is overwritten every time.
"""
import pathlib
import opencc

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "lang" / "zh-Hant.js"
DST = ROOT / "lang" / "zh-Hans.js"

# Post-conversion wording fixes: (converted text, preferred text)
FIXES = [
    ('LANGS["zh-Hant"]', 'LANGS["zh-Hans"]'),
    ('name: "繁体中文"', 'name: "简体中文"'),
    ('htmlLang: "zh-Hant"', 'htmlLang: "zh-Hans"'),
    ("医院以健保", "医院以台湾全民健保"),
    ("本地健保价格", "台湾本地医保价格"),
    ("仿真摄影", "模拟定位"),
    ("所需文档", "所需文件"),
    ("数字微笑设计", "数字化微笑设计"),
    ("雷射", "激光"),
    ("饭店", "酒店"),
    ("内视镜", "胃肠镜"),
    ("护理师", "护士"),
    ("音波／电波", "超声／射频"),
    ("陶瓷贴片", "瓷贴面"),
    ("回诊", "复诊"),
    ("医疗品质", "医疗质量"),
    ("洽询", "咨询"),
    ("「", "“"),
    ("」", "”"),
]

HEADER = (
    "// 简体中文 — FormosaRenewTour\n"
    "// 本文件由 tools/make_zh_hans.py 从 zh-Hant.js 自动生成，请勿手动修改。\n"
)

def main():
    text = SRC.read_text(encoding="utf-8")
    body = text.split("\n", 3)[3]  # drop the 3 Traditional header comment lines
    out = opencc.OpenCC("tw2sp").convert(body)
    for old, new in FIXES:
        if old not in out:
            raise SystemExit(f"FIX not applied (text not found): {old}")
        out = out.replace(old, new)
    DST.write_text(HEADER + out, encoding="utf-8")
    print(f"Wrote {DST}")

if __name__ == "__main__":
    main()
