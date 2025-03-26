import React, { useState } from "react";

const ImageCommentToggle = ({ imageSrc, comment }) => {
  const [showComment, setShowComment] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const speakComment = () => {
    const speech = new SpeechSynthesisUtterance(comment);
    window.speechSynthesis.speak(speech);
  };

  const handleClick = () => {
    setIsRotated(true);

    // Wait for the rotation animation to finish before running the other functionality
    setTimeout(() => {
      setShowComment(true);
      speakComment();
      setIsRotated(false); // Reset rotation after transition
    }, 500); // Adjust this time based on the CSS transition duration
  };

  return (
    <div className="relative w-45 h-100 border rounded-lg overflow-hidden shadow-lg">
      {!showComment ? (
        <div
          className="relative w-full h-full flex items-center justify-center bg-gray-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={imageSrc} alt="Preview" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-white transition-opacity duration-300 ${isHovered ? "opacity-50" : "opacity-0"}`} />
          {isHovered && (
            <button
              className="absolute inset-0 flex items-center justify-center"
              onClick={handleClick}
            >
              <img
                src="/button.svg"
                alt="Play"
                className={`w-20 h-20 transition-transform duration-500 ${
                  isRotated ? "rotate-[-180deg]" : "rotate-0"
                }`}
              />
            </button>
          )}
        </div>
      ) : (
        <div
          className="w-full h-full flex flex-col items-center bg-white text-black px-4 pt-4 cursor-pointer"
          onClick={() => setShowComment(false)}
        >
          <p className="w-full text-lg font-semibold border-b pb-4">{comment}</p>
          <span className="text-xl mb-2">🔊</span>
        </div>
      )}
    </div>
  );
};

export default ImageCommentToggle;
