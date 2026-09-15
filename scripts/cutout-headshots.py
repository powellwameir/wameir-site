"""
Headshot cutouts — step 1 of the team-photo pipeline (§4A req 4).

The three originals were shot against very different backdrops (night skyline,
wood wall, outdoor bokeh). To make them read as one set, each person is cut out
here and later composited onto the same navy card by scripts/grade-images.mjs.

Reads the originals from /images (kept untouched) and writes RGBA PNGs to
/images/cutouts. The cutouts are committed, so re-grading only needs Node.

Run (from repo root, in an env with `pip install "rembg[cpu]"`):
    python scripts/cutout-headshots.py [model]
Default model: u2net_human_seg (people-specific). isnet-general-use is a
fallback if hair edges come out poorly.
"""
import sys
from pathlib import Path

from PIL import Image
from rembg import new_session, remove

SRC = Path("images")
OUT = SRC / "cutouts"
OUT.mkdir(parents=True, exist_ok=True)

SOURCES = {
    "team-mitch-maurer": "mitch-maurer-headshot.png",
    "team-will-powell": "will-powell-headshot.jpg",
    "team-bob-green": "bob-green-headshot.jpg",
}


def main() -> None:
    model = sys.argv[1] if len(sys.argv) > 1 else "u2net_human_seg"
    session = new_session(model)
    for out_name, src_name in SOURCES.items():
        img = Image.open(SRC / src_name).convert("RGB")
        cut = remove(
            img,
            session=session,
            alpha_matting=True,
            alpha_matting_foreground_threshold=240,
            alpha_matting_background_threshold=15,
            alpha_matting_erode_size=8,
        )
        dest = OUT / f"{out_name}.png"
        cut.save(dest)
        print(f"  wrote {dest} ({cut.width}x{cut.height}) via {model}")


if __name__ == "__main__":
    main()
