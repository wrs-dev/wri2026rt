import Image from 'next/image';

const Banner2026RTNoButton = () => {
  return (
    <section className="relative w-full min-h-[350px] sm:min-h-[500px]">
      <Image
        src="/boston-city-skyline.webp"
        alt="home-banner"
        fill
        className="object-cover object-[center_35%]"
        quality={90}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-1 text-4xl text-white sm:text-6xl text-shadow-outline">
            Boston, MA
          </h1>
          <h1 className="mb-8 text-4xl text-white sm:text-6xl text-shadow-outline">
            September 1–3, 2026
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner2026RTNoButton;