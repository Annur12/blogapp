import { itineraries } from "@/data";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

const AboutTour = () => {
  return (
    <section id="about" className="pt-30 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="col-span-1">
            <h3 className="font-serif font-bold text-blue-600 text-md p-4">
              About This Tour
            </h3>

            <div className="p-4">
              <p className="text-gray-600 mb-6">
                This 8-day educational tour covered historical, cultural,
                industrial, and governmental sites across Luzon, providing
                comprehensive learning experiences beyond the classroom.
              </p>
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="mr-2 text-blue-500 text-lg" />
                <span className="text-dark text-sm">
                  Duration: April 7-14, 2025
                </span>
              </div>
              <div className="flex items-center mb-4">
                <FaLocationDot className="mr-2 text-blue-500 text-lg" />
                <span className="text-dark text-sm">
                  Locations: Manila, Subic, Baguio
                </span>
              </div>
              <div className="flex items-center mb-4">
                <IoIosPeople className="mr-2 text-blue-500 text-lg" />
                <span className="text-dark text-sm">
                  Participants: 50+ Students + Faculty
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-serif font-bold text-blue-600 text-md p-4">
              Itinerary
            </h3>
            <div className="">
              {itineraries.map((item) => (
                <div
                  key={item.day}
                  className="p-5 hover:bg-gray-50 transition-colors cursor-pointer flex items-start"
                >
                  <div className="bg-blue-100 text-blue-800 rounded-lg p-2 mr-4 text-center min-w-12">
                    <div className="font-bold text-lg">{item.day}</div>
                    <div className="text-xs">Day</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.locations}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTour;
