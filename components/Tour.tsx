import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import { tourDays } from "@/data";

import { FaBuildingColumns } from "react-icons/fa6";
import { TbBuildingFortress } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Tour = () => {
  // Get Day 1 data
  const day1 = tourDays.find((tour) => tour.day === "1");
  // Get all other days (2-5)
  const otherDays = tourDays.filter((tour) => tour.day !== "1");

  if (!day1) return null;

  return (
    <section
      id="entries"
      className="pt-12 pb-20 md:pt-16 md:pb-20 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Day 1 Featured Section */}
        <div className="mb-6 md:mb-8 overflow-hidden rounded-xl shadow-lg">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src={day1.image}
              alt={day1.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
              priority
            />
          </div>
        </div>

        <div className="px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 text-sm mb-4">
            <div className="flex items-center flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium whitespace-nowrap">
                Day {day1.day}
              </span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span className="text-gray-500 whitespace-nowrap">
                {day1.date}
              </span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span className="text-gray-500 flex items-center whitespace-nowrap">
                <svg
                  className="w-4 h-4 mr-1 text-accent-600"
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
                {day1.location}
              </span>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 mb-4 md:mb-6">
            {day1.title}
          </h2>

          <div>
            <p className="text-gray-600 mb-4 whitespace-pre-line">
              {day1.description.split("\n\n")[0]}
            </p>
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {day1.places.map((place, index) => {
                  let Icon;
                  if (place.includes("Rizal Monument"))
                    Icon = FaBuildingColumns;
                  else if (place.includes("Fort Santiago"))
                    Icon = TbBuildingFortress;
                  else if (place.includes("Mall of Asia"))
                    Icon = FaShoppingCart;

                  return (
                    <span
                      key={index}
                      className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                    >
                      {Icon && <Icon className="mr-1 text-blue-600" />}
                      {place}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <Link
                href={`/day/${day1.day}`} // Keep the old hash link for Day 1
                className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
              >
                Read Full Journal{" "}
                <IoIosArrowRoundForward className="inline text-xl group" />
              </Link>
            </div>
          </div>

          {/* Other Days */}
          <div className="pt-24">
            <Card days={otherDays} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;
