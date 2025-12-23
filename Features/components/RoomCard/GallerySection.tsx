"use client";

import { useState } from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@/Features/ui/button";
import { ImagePlus } from "lucide-react";

const galleryImages = [
  "/image(4).png",
  "/image(4).png",
  "/image(4).png",
  "/image(4).png",
  "/image(4).png",
];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [mainImage, setMainImage] = useState(galleryImages[0]);

  return (
    <>
      <section className="w-[1320px] h-[423px] flex gap-6 relative">
        <div className="relative w-[648px] h-[423px] rounded-lg overflow-hidden">
          <Image src={galleryImages[0]} alt="" fill className="" />
        </div>

        <div className="relative w-[312px] h-[423px] rounded-lg overflow-hidden">
          <Image src={galleryImages[1]} alt="" fill className="" />
        </div>

        <div className="relative w-[312px] h-[422px] rounded-lg overflow-hidden">
          <Image src={galleryImages[2]} alt="" fill className="" />
        </div>

        <Button
          onClick={() => setOpen(true)}
          border="orange"
          className="absolute bottom-4 left-4 w-[133px] h-5 gap-1 text-[10px] bg-secondary"
        >
          <ImagePlus size={14} />
          مشاهده تصاویر بیشتر
        </Button>
      </section>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth={false}
        PaperProps={{
          sx: {
            width: "980px",
            height: "560px",
            borderRadius: "16px",
          },
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{ position: "absolute", left: 12, top: 12, zIndex: 10 }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent className="h-full">
          <div className="flex gap-4 h-full">
            <div className="flex flex-col justify-between">
              {galleryImages.slice(0, 4).map((src) => (
                <div
                  key={src}
                  onClick={() => setMainImage(src)}
                  className="
              relative
              w-40
              h-[120px]
              rounded-lg
              overflow-hidden
              cursor-pointer
              hover:scale-[1.03]
              transition
            "
                >
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="relative flex-1 rounded-xl overflow-hidden bg-black">
              <Image
                key={mainImage}
                src={mainImage}
                alt=""
                fill
                className="object-cover opacity-0 animate-fadeIn"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
