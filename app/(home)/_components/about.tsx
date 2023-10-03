import LinkButton from "@/components/shared/link-button";
import LogoIcon from "@/components/shared/logo";
import Image from "next/image";

const About = () => {
  return (
    <section className="px-8 py-20">
      <div className="flex flex-col items-center md:flex-row gap-12 md:gap-14">
        <div className="flex-1 flex flex-col gap-4 md:gap-8">
          <h2 className="flex gap-3 items-center uppercase tracking-wider font-semibold">
            <LogoIcon className="w-5 h-5" />
            About pacific holdings
          </h2>
          <p className="text-gray-600 max-w-lg leading-relaxed text-base lg:text-lg">
            Pacific Holdings Limited is a diversified conglomerate in Lagos,
            Nigeria with an exceptional reputation for ethical, progressive, and
            global business best practices. From its humble beginnings in
            December 1983 as a single business operation, Pacific Holdings has
            successfully expanded its scope of business across industries
            including Banking (Pacific Merchant Bank), Education, Civil
            Engineering, Energy & Power Generation, Manufacturing, Agriculture,
            Trading, Freight Services, Gas, and Real Estate.
          </p>
          <LinkButton href="/about-us">Read more</LinkButton>
        </div>
        <div className="relative w-full flex-1 h-full">
          <div className="overflow-hidden h-full relative w-full rounded-lg aspect-video">
            <Image
              src="/images/hero.jpg"
              fill
              alt="about"
              className="object-cover scale-100 hover:scale-105 transition rounded-lg duration-500 ease-in-out"
            />
          </div>
          <div className="absolute top-32 shadow-lg shadow-gray-400 aspect-video w-2/3 h-3/4 rounded-lg overflow-hidden -left-2 z-50 bg-white">
            <Image
              src="/images/hero.jpg"
              fill
              alt="about"
              className="object-cover rounded-lg scale-100 hover:scale-105 transition duration-500 ease-in-out p-5 sm:p-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
