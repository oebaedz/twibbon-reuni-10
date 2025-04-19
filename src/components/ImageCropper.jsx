import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/cropImage"; // kita buat fungsi ini nanti

const ImageCropper = ({ imageSrc, onCropDone }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleDone = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    onCropDone(croppedImage);
  };

  return (
    <div className="relative w-full h-[400px] bg-gray-800">
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4">
        <input
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e) => setZoom(e.target.value)}
          className="w-1/2"
        />
        <button
          onClick={handleDone}
          className="bg-blue-600 text-white px-4 py-1 rounded shadow"
        >
          Selesai
        </button>
      </div>
    </div>
  );
};

export default ImageCropper;
