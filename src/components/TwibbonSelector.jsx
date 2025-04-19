import React from "react";

const twibbons = [
  "twibbon1.png",
  "twibbon2.png",
  "twibbon3.png",
];

const TwibbonSelector = ({ selectedTwibbon, setSelectedTwibbon }) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Pilih Twibbon:
      </label>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {twibbons.map((twibbon, index) => (
          <img
            key={index}
            src={`/twibbons/${twibbon}`}
            alt={`Twibbon ${index + 1}`}
            className={`w-20 h-20 sm:w-24 sm:h-24 object-contain border-2 rounded-lg shadow-sm cursor-pointer transition-all duration-200 ${
              selectedTwibbon === twibbon
                ? "border-blue-500 ring-2 ring-blue-300"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedTwibbon(twibbon)}
          />
        ))}
      </div>
    </>
  );
};

export default TwibbonSelector;
