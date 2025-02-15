"use client";
import { useEffect, useRef, useState } from "react";

interface YouTubePlayerProps {
  allowUnmute: boolean;
}

const YouTubePlayer = ({ allowUnmute }: YouTubePlayerProps) => {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Track mute state
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: "d_6TGx4ZjPE",
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: "d_6TGx4ZjPE",
          mute: 1, // Start muted
        },
        // events: {
        //   onReady: (event: any) => {
        //     event.target.playVideo();
        //   },
        // },
      });
    };
  }, []);

  // Unmute when allowed
  useEffect(() => {
    if (allowUnmute && playerRef.current) {
      setTimeout(() => {
        playerRef.current.playVideo();
        playerRef.current.unMute();
        playerRef.current.setVolume(volume);
        setIsMuted(false); // Update state
      }, 500);
    }
  }, [allowUnmute]);

  const togglePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume);
    }
  };

  return (
    <div className="fixed p-1 top-5 right-5 bg-white shadow-lg rounded-lg flex flex-col items-center">
      <div id="youtube-player"></div>
      <div className="flex">
        {/* <button
          onClick={togglePlayPause}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {isPlaying ? "Pause" : "Play"}
        </button> */}
        <button
          onClick={toggleMute}
          className="text-white text-2xl rounded-md"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
      {/* <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="mt-2"
      /> */}
    </div>
  );
};

export default YouTubePlayer;
