import Link from "next/link";
const Hero = () => {
  return (
    <section className="pt-30 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex py-2 px-4 text-xs bg-blue-50 text-blue-600 rounded-full mb-4">
          <span>8-DAY INDUSTRY VISIT</span>
        </div>

        <h1 className="font-serif text-dark text-4xl md:text-5xl mb-4 leading-tight font-bold">
          A Week I <br />
          Won&apos;t Forget
        </h1>

        <p className="max-w-2xl mx-auto text-light text-lg leading-relaxed bg-light mb-10">
          {" "}
          Welcome to my diary! This is where I share my thoughts, experiences,
          and lessons from my 8-day educational tour. Read along and experience
          the journey with me!
        </p>

        <div className="flex justify-center items-center space-x-4">
          <Link
            href="#entries"
            className="px-6 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors "
          >
            Read My Journal
          </Link>
          <Link
            href="/gallery"
            className="px-6 py-4 text-dark font-medium rounded-md border-gray-300 border hover:border-blue-600 transition-colors"
          >
            View Photos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
