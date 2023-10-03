import { aboutUs } from "@/data/about-us";

const AboutContent = () => {
  return (
    <main className="w-4/5 mx-auto py-20 flex flex-col gap-8">
      {aboutUs.map((item, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h2 className="font-semibold text-2xl text-gray-900">{item.title}</h2>
          <p className="text-base text-gray-600 leading-6">
            {item.description}
          </p>
        </div>
      ))}
    </main>
  );
};

export default AboutContent;
