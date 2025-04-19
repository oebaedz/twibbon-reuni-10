import React, { useEffect, useRef } from "react";

const CanvasPreview = ({ image, twibbon }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const draw = async () => {
      if (!image || !twibbon) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const baseImage = new Image();
      baseImage.src = image;

      const overlayImage = new Image();
      overlayImage.src = `/twibbons/${twibbon}`;

      await Promise.all([
        new Promise((res) => (baseImage.onload = res)),
        new Promise((res) => (overlayImage.onload = res)),
      ]);

      // Resize canvas (opsional: bisa dibuat dinamis sesuai image)
      canvas.width = 1080;
      canvas.height = 1080;

      // Draw user image
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

      // Draw twibbon overlay
      ctx.drawImage(overlayImage, 0, 0, canvas.width, canvas.height);
    };

    draw();
  }, [image, twibbon]);

  return (
<div className="flex justify-center my-6">
  <div className="border rounded-lg overflow-hidden shadow-md">
    <canvas ref={canvasRef} className="w-full max-w-[400px] sm:max-w-[500px]" />
  </div>
</div>

  );
};

export default CanvasPreview;
