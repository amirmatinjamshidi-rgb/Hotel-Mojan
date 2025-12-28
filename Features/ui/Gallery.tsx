"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Circle } from "lucide-react";

export default function VideoGallery() {
  const videos = ["/v1.mp4", "/v2.mp4", "/v3.mp4", "/v4.mp4", "/v5.mp4"];
  const [mainVideo, setMainVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const previews = videos.filter((v) => v !== mainVideo);

  const handleSwap = (video: string) => {
    setMainVideo(video);
    setIsPlaying(true);
    setIsLoaded(false);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!videoRef.current) return;
    const videoEl = videoRef.current;

    const handleCanPlay = () => {
      setIsLoaded(true);
      videoEl.play().catch(() => {});
    };

    videoEl.addEventListener("canplaythrough", handleCanPlay);
    return () => videoEl.removeEventListener("canplaythrough", handleCanPlay);
  }, [mainVideo]);

  return (
    <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-4 px-4 lg:px-0">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="flex items-center gap-2 text-sm sm:text-lg font-bold">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={12}
          />
          چرا هتل ساحلی موجان، انتخاب اول مسافران است؟
        </h1>
      </div>

      <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-6">
        <div className="flex flex-row lg:flex-col justify-between gap-4 h-auto lg:h-[576px] overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {previews.slice(0, 4).map((video) => (
            <div
              key={video}
              onClick={() => handleSwap(video)}
              className="shrink-0 w-40 sm:w-[200px] h-[100px] sm:h-[120px] rounded-lg overflow-hidden cursor-pointer shadow-md hover:scale-[1.03] transition duration-200"
            >
              <video
                src={video}
                muted
                preload="metadata"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>

        <div className="relative grow lg:w-[1080px] h-[300px] sm:h-[450px] lg:h-[576px] rounded-2xl overflow-hidden bg-black">
          <video
            key={mainVideo}
            ref={videoRef}
            src={mainVideo}
            autoPlay
            muted
            preload="metadata"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/20 backdrop-blur-2xl flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="bg-white w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center cursor-pointer transition-transform active:scale-90 shadow-lg"
              >
                {isPlaying ? (
                  <Pause className="text-primary fill-primary" size={32} />
                ) : (
                  <Play className="text-primary fill-primary ml-1" size={32} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
