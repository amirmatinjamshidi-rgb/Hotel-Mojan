"use client";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Circle } from "lucide-react";
export default function VideoGallery() {
  const videos = ["/v1.mp4", "/v2.mp4", "/v3.mp4", "/v4.mp4", "/v5.mp4"];

  const [mainVideo, setMainVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const previews = videos.filter((v) => v !== mainVideo);

  const handleSwap = (video: string) => {
    setMainVideo(video);
    setIsPlaying(true);

    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-[1320px] flex flex-col justify-between gap-4 mr-20">
      <div className="h-10 flex items-center gap-2 mb-6">
        <h1 className="flex items-center gap-2 text-lg">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={15}
          />
          چرا هتل ساحلی موجان، انتخاب اول مسافران است؟
        </h1>
      </div>

      <div className="w-full flex justify-between gap-4">
        <div className="flex flex-col justify-between h-[576px]">
          {previews.slice(0, 4).map((video) => (
            <div
              key={video}
              onClick={() => handleSwap(video)}
              className="
                w-[200px]
                h-[120px]
                rounded-lg
                overflow-hidden
                cursor-pointer
                shadow
                hover:scale-[1.03]
                transition
                duration-200
              "
            >
              <video src={video} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div
          className="
            relative
            w-[1100px]
            h-[576px]
            rounded-2xl
            overflow-hidden
            bg-black
          "
        >
          <video
            key={mainVideo}
            ref={videoRef}
            src={mainVideo}
            autoPlay
            className="
              w-full
              h-full
              object-cover
              opacity-0
              animate-fadeIn
            "
          />

          <button
            onClick={togglePlay}
            className=" absolute bottom-[250px] left-[620px] bg-textOnText w-[110px] h-[110px] rounded-full flex items-center justify-center cursor-pointer transition"
          >
            {isPlaying ? (
              <Pause className="stroke-primary" size={70} />
            ) : (
              <Play className="stroke-primary" size={70} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
