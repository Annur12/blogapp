import Image from "next/image";
import Link from "next/link";

import { IoIosArrowRoundForward } from "react-icons/io";

export interface Tour {
  day: string;
  date: string;
  location: string;
  title: string;
  description: string;
  image: string;
}

export interface CardProps {
  days: Tour[];
}

const Card = ({ days }: CardProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {days.map((tour) => (
        <div
          key={tour.day}
          className="bg-white rounded-xl shadow-md overflow-hidden card-hover border border-gray-100 transition-all duration-300 hover:shadow-lg"
        >
          <div className="relative h-48 sm:h-64 md:h-80 w-full">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center flex-wrap gap-2 text-sm mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                Day {tour.day}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">{tour.date}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {tour.location}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
              {tour.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {tour.description}
            </p>

            <Link
              href={`/day/${tour.day}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors mt-0"
            >
              Read more
              <IoIosArrowRoundForward className="inline text-xl ml-1 group" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
