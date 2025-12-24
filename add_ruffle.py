#!/usr/bin/env python3
import argparse
import re
import shutil
from pathlib import Path

# Самый быстрый вариант: подгружаем Ruffle с CDN (нужен интернет).
# Ruffle "polyfill" подменяет <object>/<embed> со SWF на свой плеер.
RUFFLE_SCRIPT = '<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>'

# Папки, которые не надо трогать (служебные/дубликаты)
IGNORE_DIRS = {"_vti_cnf", ".git", "node_modules"}

def should_ignore(p: Path) -> bool:
    return any(part in IGNORE_DIRS for part in p.parts)

def already_has_ruffle(html_lower: str) -> bool:
    return ("@ruffle-rs/ruffle" in html_lower) or ("ruffle.js" in html_lower)

def read_text_guessing_encoding(p: Path):
    raw = p.read_bytes()
    low = raw.lower()

    # Если в файле явно указан charset, пробуем сначала его
    if b"charset=windows-1251" in low or b"charset=cp1251" in low or b"charset=1251" in low:
        enc_order = ["cp1251", "utf-8-sig", "utf-8", "latin-1"]
    elif b"charset=utf-8" in low:
        enc_order = ["utf-8-sig", "utf-8", "cp1251", "latin-1"]
    else:
        enc_order = ["utf-8-sig", "utf-8", "cp1251", "latin-1"]

    for enc in enc_order:
        try:
            return raw.decode(enc), enc
        except UnicodeDecodeError:
            pass

    return raw.decode("utf-8", errors="replace"), "utf-8"

def write_text_with_encoding(p: Path, text: str, enc: str):
    p.write_bytes(text.encode(enc))

def insert_script(html: str) -> str:
    # Вставляем перед </head>, иначе перед </body>, иначе в начало файла.
    m = re.search(r"</head\s*>", html, flags=re.IGNORECASE)
    if m:
        return html[:m.start()] + "\n" + RUFFLE_SCRIPT + "\n" + html[m.start():]
    m = re.search(r"</body\s*>", html, flags=re.IGNORECASE)
    if m:
        return html[:m.start()] + "\n" + RUFFLE_SCRIPT + "\n" + html[m.start():]
    return RUFFLE_SCRIPT + "\n" + html

def main():
    ap = argparse.ArgumentParser(description="Add Ruffle loader script into HTML/HTM files")
    ap.add_argument("root", help="Folder with the site (where index.html/main.htm live)")
    ap.add_argument("--backup", action="store_true", help="Create .bak backups before modifying")
    args = ap.parse_args()

    root = Path(args.root).expanduser().resolve()
    if not root.exists():
        raise SystemExit(f"Folder not found: {root}")

    html_files = []
    for ext in ("*.html", "*.htm", "*.HTML", "*.HTM"):
        html_files.extend(root.rglob(ext))

    scanned = 0
    patched = 0
    skipped = 0

    for p in sorted(set(html_files)):
        if should_ignore(p):
            continue
        if not p.is_file():
            continue

        scanned += 1
        try:
            html, enc = read_text_guessing_encoding(p)
        except Exception:
            skipped += 1
            continue

        low = html.lower()
        if already_has_ruffle(low):
            continue

        new_html = insert_script(html)
        if new_html == html:
            continue

        if args.backup:
            bak = p.with_suffix(p.suffix + ".bak")
            if not bak.exists():
                shutil.copy2(p, bak)

        write_text_with_encoding(p, new_html, enc)
        patched += 1

    print(f"Done. Scanned: {scanned}, Patched: {patched}, Skipped(unreadable): {skipped}")
    print("Next: start a local server and open http://localhost:8000/")
    print("If you have both index.html and main.htm, try both URLs.")

if __name__ == "__main__":
    main()
