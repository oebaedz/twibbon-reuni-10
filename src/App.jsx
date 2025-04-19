import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImageCropper from "./components/ImageCropper";
import TwibbonSelector from "./components/TwibbonSelector";
import CanvasPreview from "./components/CanvasPreview";
import DownloadButton from "./components/DownloadButton";

const App = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [selectedTwibbon, setSelectedTwibbon] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 px-4 py-8 flex justify-center items-start">
       <div className="w-full max-w-screen-md bg-white shadow-xl rounded-lg p-6 space-y-6">
       <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-600">
          🎉 Twibbon Maker
        </h1>
        <p className="text-center text-gray-500 text-sm mt-1">
          Upload foto, crop, tambahkan twibbon & download hasilnya!
        </p>


        <ImageUploader setImage={setOriginalImage} />

        {originalImage && !croppedImage && (
          <ImageCropper
            imageSrc={originalImage}
            onCropDone={(cropped) => setCroppedImage(cropped)}
          />
        )}

        {croppedImage && (
          <>
            <TwibbonSelector
              selectedTwibbon={selectedTwibbon}
              setSelectedTwibbon={setSelectedTwibbon}
            />
            {selectedTwibbon && (
              <>
                <CanvasPreview image={croppedImage} twibbon={selectedTwibbon} />
                <div className="flex justify-center">
                  <DownloadButton />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
