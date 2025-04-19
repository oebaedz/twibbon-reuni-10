import React from "react";

const ImageUploader = ({ setImage }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
<div className="my-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Upload Foto Kamu:
  </label>
  <input
    type="file"
    accept="image/*"
    onChange={handleChange}
    className="w-full file:mr-4 file:py-2 file:px-4
               file:rounded-full file:border-0
               file:text-sm file:font-semibold
               file:bg-blue-50 file:text-blue-700
               hover:file:bg-blue-100"
  />
</div>
  );
};

export default ImageUploader;
