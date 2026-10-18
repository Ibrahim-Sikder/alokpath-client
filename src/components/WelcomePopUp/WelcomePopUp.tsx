"use client";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const WelcomePopUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="relative bg-white rounded-lg w-full max-w-3xl shadow-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-black text-2xl z-10"
        >
          <IoClose />
        </button>

        {/* Responsive Video Container */}
        <div className="w-full aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WjFJf_bIv54?autoplay=1&rel=0"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopUp;
