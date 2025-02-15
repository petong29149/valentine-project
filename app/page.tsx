"use client";

import { useState, useEffect, useCallback } from "react";
import YouTubePlayer from "@/app/components/YoutubePlayer";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [bounceClass, setBounceClass] = useState("animate-bounce2");
  const [allowUnmute, setAllowUnmute] = useState(false);
  const [userName, setUserName] = useState("");
  const [reply, setReply] = useState(false);
  const [randomMessage, setRandomMessage] = useState("");
  const [typedMessage, setTypedMessage] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  const messages = [
    `Happy Valentine's Day, ${userName}! You're a shining star, and every moment of your life is a blessing. Keep spreading love, and always remember, you're loved more than words can say krub ❤️.`,
    `Dear ${userName}, on this beautiful day of love, may your heart be filled with joy and your journey be blessed. You're a special person, and the world is better with you in it krub ❤️.`,
    `Sending love your way, ${userName}. May this Valentine’s Day remind you how wonderful and important you are. Keep shining, keep loving, and keep inspiring everyone around you krub ❤️.`,
    `Happy Valentine’s Day, ${userName}! May your days be full of love, laughter, and the blessings that life has to offer. You're a gift to this world, and I'm so grateful to have you as a friend krub ❤️.`,
  ];

  // Handle random message selection
  useEffect(() => {
    if (reply) {
      let message;
      if (userName.toLowerCase() === "mild") {
        message =
          "Happy Valentine's Day krub. Every day with you feels like a celebration, and I’m so grateful to have you in my life. I promise to cherish you, support you, and fill your days with happiness, and all the snacks you love lol. I wish for us to stay by each other’s side forever, sharing every moment together. Love you the most krub, dek-noi. ❤️";
      } else {
        message = messages[Math.floor(Math.random() * messages.length)];
      }
      setRandomMessage(message);
      setTypedMessage("");
      setTypingIndex(0);
    }
  }, [reply, userName]);

  // Typing effect
  useEffect(() => {
    if (typingIndex < randomMessage.length && reply) {
      const typingInterval = setInterval(() => {
        setTypedMessage((prev) => prev + randomMessage[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [typingIndex, randomMessage, reply]);

  // Close popup with animation
  const handleClosePopup = useCallback(() => {
    setBounceClass("animate-bounce-out");
    setTimeout(() => {
      setShowPopup(false);
      setAllowUnmute(true);
    }, 500);
  }, []);

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  // Show reply on Enter key or button click
  const showReply = useCallback(() => {
    if (userName.trim()) {
      setReply(true);
    }
  }, [userName]);

  // Handle Enter key press
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      showReply();
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-pink-400"
      style={{
        backgroundImage: "url('/valentines_bg2.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`bg-white rounded-lg p-4 w-[90%] max-w-[300px] text-center transition-transform duration-500 ${bounceClass}`}
          >
            <h2 className="text-2xl font-bold text-pink-600">
              No matter who you are,
            </h2>
            <p className="text-lg mt-2 text-pink-800">
              love is something we all deserve.
            </p>
            <div className="my-5 flex justify-center">
              <div className="loader"></div>
            </div>
            <button
              onClick={handleClosePopup}
              className="bg-pink-500 text-white px-4 py-2 rounded transition-all ease-in-out duration-200 hover:bg-pink-600 hover:scale-105"
            >
              Get your Love ❤️
            </button>
          </div>
        </div>
      )}

      <div className="w-full text-center text-4xl py-3">
        <p className="text-white drop-shadow-[0_0_10px_#f12d7ecc]">
          Valentine's Day
        </p>
        <p className="text-white text-xl drop-shadow-[0_0_10px_#f12d7ecc]">
          is here for you all
        </p>
      </div>

      <div className="flex-grow">
        <div className="container mx-auto">
          <div className="flex flex-col items-center px-3 mt-5">
            <div className="w-full max-w-[320px] h-[600px] bg-gray-900 shadow-md rounded-[30px] px-4 py-4 flex flex-col items-center">
              <div
                className="w-full h-full max-w-[576px] rounded-[14px] overflow-x-hidden overflow-y-auto custom-scrollbar relative"
                style={{
                  backgroundImage: "url('/chat_bg2.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div>
                  <img
                    src="/system_bar.png"
                    alt="system bar"
                    className="w-full h-auto"
                  />
                </div>
                <div className="relative w-full text-pink-600 p-4">
                  <div className="flex flex-row gap-4">
                    <div>
                      <div className="w-[45px] h-[45px] rounded-full bg-white flex justify-center items-center text-pink-600 text-4xl shadow">
                        P
                      </div>
                    </div>
                    <p className="px-3 py-1 bg-white rounded-md w-full flex items-center shadow">
                      What's your name krub?
                    </p>
                  </div>
                </div>
                {userName && !reply && (
                  <p className="px-3 py-1 w-full text-lg text-right drop-shadow-[0_0_10px_#f12d7ecc]">
                    typing
                    <span className="animate-dot-sequence">.</span>
                  </p>
                )}
                {reply && (
                  <>
                    <div className="relative w-full text-white p-4">
                      <div className="flex flex-row gap-4">
                        <p className="px-3 py-1 bg-pink-600 rounded-md w-full flex items-center shadow">
                          {userName}
                        </p>
                        <div>
                          <div className="w-[45px] h-[45px] rounded-full bg-white flex justify-center items-center text-pink-600 text-2xl shadow">
                            ❤️
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full text-pink-600 p-4">
                      <div className="flex flex-row gap-4">
                        <div>
                          <div className="w-[45px] h-[45px] rounded-full bg-white flex justify-center items-center text-pink-600 text-4xl shadow">
                            P
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-white rounded-md w-full flex flex-col items-center shadow">
                          <span>{typedMessage}</span>
                          {userName.toLowerCase() === "mild" && (
                            <div className="p-2">
                              <img
                                src="/mild_pic.jpg"
                                alt="mild pic"
                                className="w-full h-auto rounded-[10px]"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <div className="absolute bottom-3 w-full text-gray-900 px-4 flex items-center">
                  {!reply && (
                    <div className="relative w-full">
                      <input
                        value={userName}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="transition-all duration-200 w-full rounded-full px-4 py-2 drop-shadow-[0_0_10px_#f12d7ecc] pr-16 focus:ring-4 focus:ring-pink-500 focus:outline-none"
                        type="text"
                        placeholder="Type here."
                      />
                      <button
                        onClick={showReply}
                        className="absolute transition-all duration-200 right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-2 py-[6px] rounded-full hover:bg-blue-600 disabled:bg-gray-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="18px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#FFFFFF"
                        >
                          <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <YouTubePlayer allowUnmute={allowUnmute} />

      <div className="w-full text-center">by tetwo</div>
    </div>
  );
}