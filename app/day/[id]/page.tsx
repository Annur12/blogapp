import Image from "next/image";
import Link from "next/link";
import { tourDays } from "@/data";
import { FaBuildingColumns } from "react-icons/fa6";
import { TbBuildingFortress } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

type PageProps = {
  params: {
    id: string;
  };
};

const TourDetail = ({ params }: PageProps) => {
  const { id } = params;
  const currentIndex = tourDays.findIndex((t) => t.day === id);
  const tour = tourDays[currentIndex];
  const nextTour = tourDays[currentIndex + 1];
  const prevTour = tourDays[currentIndex - 1];

  if (!tour) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Tour not found.
      </div>
    );
  }

  return (
    <section id="entries" className="pt-30 pb-20  px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="mb-6 md:mb-8 overflow-hidden rounded-xl shadow-lg">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src={tour.image}
              alt={tour.title}
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
                Day {tour.day}
              </span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span className="text-gray-500 whitespace-nowrap">
                {tour.date}
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
                {tour.location}
              </span>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 mb-4 md:mb-6">
            {tour.title}
          </h2>

          <div className="text-gray-600 space-y-4 whitespace-pre-line">
            {tour.description}
          </div>

          {tour.places?.length > 0 && (
            <div className="mt-8 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Places Visited:
              </h3>
              <div className="flex flex-wrap gap-2">
                {tour.places.map((place, index) => {
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
          )}

          {/* Bottom Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-6 border-t border-gray-200">
            <div>
              {prevTour && (
                <Link
                  href={`/day/${prevTour.day}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <IoIosArrowRoundBack className="mr-2 text-xl" />
                  <div className="text-left">
                    <span className="text-xs block text-gray-500">
                      Previous
                    </span>
                    <span className="font-medium">Day {prevTour.day}</span>
                  </div>
                </Link>
              )}
            </div>

            <Link
              href="/#entries"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              Back to All Days
            </Link>

            <div>
              {nextTour && (
                <Link
                  href={`/day/${nextTour.day}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <div className="text-right">
                    <span className="text-xs block text-gray-500">Next</span>
                    <span className="font-medium">Day {nextTour.day}</span>
                  </div>
                  <IoIosArrowRoundForward className="ml-2 text-xl" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetail;
