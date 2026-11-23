// Shrinks an image file in the browser before it is saved, so it fits in one database document.
// Photos become JPEG (max 1280 px, sharp on a projector and in print); logos keep PNG transparency.
export function shrinkImage(file, { max = 1280, maxH = max, photo = true } = {}) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      const draw = (scale, quality) => {
        const k = Math.min(1, (max * scale) / img.width, (maxH * scale) / img.height);
        const cv = document.createElement("canvas");
        cv.width = Math.max(1, Math.round(img.width * k)); cv.height = Math.max(1, Math.round(img.height * k));
        const g = cv.getContext("2d");
        if (photo) { g.fillStyle = "#fff"; g.fillRect(0, 0, cv.width, cv.height); } // JPEG has no transparency
        g.drawImage(img, 0, 0, cv.width, cv.height);
        if (!photo) { const png = cv.toDataURL("image/png"); if (png.length < 160000) return png; }
        return cv.toDataURL("image/jpeg", quality);
      };
      // Stay well under Firestore's 1 MB per document: lower quality, then size, if needed
      for (const [scale, q] of [[1, .82], [1, .7], [.8, .7], [.6, .7], [.45, .65]]) {
        const url = draw(scale, q);
        if (url.length < 900000) return resolve(url);
      }
      reject(new Error("Picture too large"));
    };
    img.onerror = () => reject(new Error("Not a picture"));
    img.src = URL.createObjectURL(file);
  });
}
