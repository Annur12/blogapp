// components/Gallery.js
import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data";

const Gallery = () => {
  return (
    <div className="max-w-3xl mx-auto pt-16 pb-20">
      <div className="rounded-xl overflow-hidden">
        <h3 className="font-serif text-sm font-bold text-blue-500 mb-6 p-2">
          Tour Gallery
        </h3>

        <div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {galleryImages.slice(0, 6).map((image) => (
              <div key={image.id} className="relative w-full h-24">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all photos
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
