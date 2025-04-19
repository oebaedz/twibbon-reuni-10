import React from "react";

const DownloadButton = ({ canvasId = "canvas" }) => {
  const downloadImage = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    link.download = "twibbon-result.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
<button
  onClick={downloadImage}
  className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-base rounded-lg shadow-md"
>
  📥 Download Hasil Gambar
</button>

  );
};

export default DownloadButton;
